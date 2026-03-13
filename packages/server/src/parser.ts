import { Diagnostic } from "vscode-languageserver";
import { Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { ContextSymbolTable } from "./context/ContextSymbolTable";
import { BaseScope } from "./context/symbolTable/BaseScope";
import { ClassSymbol } from "./context/symbolTable/ClassSymbol";
import { FunctionSymbol } from "./context/symbolTable/FunctionSymbol";
import { LocalScope } from "./context/symbolTable/LocalScope";
import { MemberSymbol } from "./context/symbolTable/MemberSymbol";
import { MethodSymbol } from "./context/symbolTable/MethodSymbol";
import { ModuleSymbol } from "./context/symbolTable/ModuleSymbol";
import { ParameterSymbol } from "./context/symbolTable/ParameterSymbol";
import { VariableSymbol } from "./context/symbolTable/VariableSymbol";
import { pushBuiltinClass, pushBuiltinFunction } from "./lib/builtins/builtin";
import { Parser as WebTSParser, Language } from "web-tree-sitter";
import type { Node, Tree } from "web-tree-sitter";
import * as path from "path";

export type { Node, Tree };

export type ModuleResolver = (
  dottedName: string
) => ContextSymbolTable | undefined;

export interface ParsePackage {
  symbolTable: ContextSymbolTable;
  ast: Tree;
  diagnostic: Diagnostic[];
}

export function toRange(node: Node): Range {
  return {
    start: {
      line: node.startPosition.row,
      character: node.startPosition.column,
    },
    end: {
      line: node.endPosition.row,
      character: node.endPosition.column,
    },
  };
}

export class Parser {
  private parser!: WebTSParser;

  private symbolTable!: ContextSymbolTable;
  private currentScope!: BaseScope;
  private moduleResolver?: ModuleResolver;

  private constructor() {}

  public static async create(): Promise<Parser> {
    await WebTSParser.init({
      locateFile: () => path.join(__dirname, "web-tree-sitter.wasm"),
    });
    const instance = new Parser();
    instance.parser = new WebTSParser();

    const langWasm = path.join(__dirname, "tree-sitter-epscript.wasm");
    const lang = await Language.load(langWasm);
    instance.parser.setLanguage(lang);
    return instance;
  }

  public parse(
    document: TextDocument,
    moduleResolver?: ModuleResolver
  ): ParsePackage {
    const tree = this.parser.parse(document.getText());
    if (!tree) throw new Error("Failed to parse document");
    const diagnostics: Diagnostic[] = [];

    this.symbolTable = new ContextSymbolTable(document);
    this.currentScope = this.symbolTable.globalScope;
    this.moduleResolver = moduleResolver;

    pushBuiltinClass(this.symbolTable.predefinedScope);
    pushBuiltinFunction(this.symbolTable.predefinedScope);

    // Pass 1: 선언 수집
    this.visit(tree.rootNode);

    // Pass 2: 초기화 표현식으로 타입 추론
    this.currentScope = this.symbolTable.globalScope;
    this.inferTypes(tree.rootNode);

    return {
      ast: tree,
      symbolTable: this.symbolTable,
      diagnostic: diagnostics,
    };
  }

  private visit(node: Node): void {
    switch (node.type) {
      case "function_declaration":
        this.visitFunctionDeclaration(node);
        return;
      case "object_declaration":
        this.visitObjectDeclaration(node);
        return;
      case "object_method_declaration":
        this.visitMethodDeclaration(node);
        return;
      case "object_field_declaration":
        this.visitFieldDeclaration(node);
        return;
      case "var_declaration":
      case "var_assign_declaration":
      case "static_var_declaration":
        this.visitVarDeclaration(node);
        return;
      case "const_declaration":
        this.visitConstDeclaration(node);
        return;
      case "import_statement":
        this.visitImportStatement(node);
        return;
      case "if_statement":
      case "for_statement":
      case "while_statement":
      case "foreach_statement":
        this.visitBlockScope(node);
        return;
    }

    this.visitChildren(node);
  }

  private visitChildren(node: Node): void {
    for (const child of node.children) {
      this.visit(child);
    }
  }

  private pushScope(scope: BaseScope): void {
    this.currentScope = scope;
  }

  private popScope(): void {
    if (this.currentScope.parent) {
      this.currentScope = this.currentScope.parent;
    }
  }

  private visitFunctionDeclaration(node: Node): void {
    const nameNode = node.childForFieldName("name");
    if (!nameNode) return;

    const bodyNode = node.childForFieldName("body");
    const symbol = new FunctionSymbol(
      nameNode.text,
      toRange(nameNode),
      bodyNode ? toRange(bodyNode) : toRange(node),
      this.currentScope
    );

    this.visitReturnType(node, symbol);

    this.currentScope.insert(symbol);
    this.pushScope(symbol);

    this.visitParameters(node);
    if (bodyNode) this.visit(bodyNode);

    this.popScope();
  }

  private visitObjectDeclaration(node: Node): void {
    const nameNode = node.childForFieldName("name");
    if (!nameNode) return;

    const symbol = new ClassSymbol(
      nameNode.text,
      toRange(nameNode),
      toRange(node),
      this.currentScope
    );

    this.currentScope.insert(symbol);
    this.pushScope(symbol);

    for (const child of node.children) {
      if (child.type === "object_member") {
        this.visitChildren(child);
      }
    }

    this.popScope();
  }

  private visitMethodDeclaration(node: Node): void {
    const nameNode = node.childForFieldName("name");
    if (!nameNode) return;

    const bodyNode = node.childForFieldName("body");
    const symbol = new MethodSymbol(
      nameNode.text,
      toRange(nameNode),
      bodyNode ? toRange(bodyNode) : toRange(node),
      this.currentScope
    );

    this.visitReturnType(node, symbol);

    this.currentScope.insert(symbol);
    this.pushScope(symbol);

    this.visitParameters(node);
    if (bodyNode) this.visit(bodyNode);

    this.popScope();
  }

  private visitFieldDeclaration(node: Node): void {
    const typedNameList = node.childForFieldName("declarators");
    if (!typedNameList) return;

    for (const typedName of typedNameList.namedChildren) {
      if (typedName.type !== "typed_name") continue;

      const nameNode = typedName.childForFieldName("name");
      if (!nameNode) continue;

      const symbol = new MemberSymbol(
        nameNode.text,
        this.currentScope,
        toRange(typedName)
      );

      const typeNode = typedName.childForFieldName("type");
      if (typeNode) {
        const resolved = this.resolveType(typeNode);
        if (resolved) symbol.value = resolved;
      }

      this.currentScope.insert(symbol);
    }
  }

  private visitVarDeclaration(node: Node): void {
    const modifier = node.type === "static_var_declaration" ? "var" : "var";
    const typedNameList = this.findChild(node, "typed_name_list");
    if (!typedNameList) return;

    for (const typedName of typedNameList.namedChildren) {
      if (typedName.type !== "typed_name") continue;

      const nameNode = typedName.childForFieldName("name");
      if (!nameNode) continue;

      const symbol = new VariableSymbol(
        nameNode.text,
        this.currentScope,
        toRange(typedName)
      );
      symbol.modifier = modifier;

      const typeNode = typedName.childForFieldName("type");
      if (typeNode) {
        const resolved = this.resolveType(typeNode);
        if (resolved) symbol.value = resolved;
      }

      this.currentScope.insert(symbol);
    }
  }

  private visitConstDeclaration(node: Node): void {
    const namesNode = this.findChild(node, "names");
    if (!namesNode) return;

    for (const nameNode of namesNode.namedChildren) {
      if (nameNode.type !== "identifier") continue;

      const symbol = new VariableSymbol(
        nameNode.text,
        this.currentScope,
        toRange(nameNode)
      );
      symbol.modifier = "const";

      this.currentScope.insert(symbol);
    }
  }

  private visitImportStatement(node: Node): void {
    const dottedName = this.findChild(node, "dotted_name");
    if (!dottedName) return;

    const aliasedImport = this.findChild(node, "aliased_import");
    const dotted = dottedName.text.split(".");
    let name = dotted[dotted.length - 1];

    if (aliasedImport) {
      const aliasId = this.findChild(aliasedImport, "identifier");
      if (aliasId) name = aliasId.text;
    }

    const symbol = new ModuleSymbol(
      name,
      toRange(dottedName),
      toRange(node),
      this.currentScope
    );

    if (this.moduleResolver) {
      const resolved = this.moduleResolver(dottedName.text);
      if (resolved) {
        resolved.globalScope.getSymbols().forEach((x) => {
          const moduleSymbol = x as BaseScope;
          symbol.symbols.set(moduleSymbol.name, moduleSymbol);
        });
      }
    }

    this.currentScope.symbols.set(symbol.name, symbol);
  }

  private visitBlockScope(node: Node): void {
    const scope = new LocalScope(toRange(node), this.currentScope);
    this.currentScope.insert(scope);
    this.pushScope(scope);

    if (node.type === "foreach_statement") {
      const initNode = node.childForFieldName("initializer");
      if (initNode) {
        for (const nameNode of initNode.namedChildren) {
          if (nameNode.type !== "identifier") continue;
          const varSym = new VariableSymbol(
            nameNode.text,
            this.currentScope,
            toRange(nameNode)
          );
          this.currentScope.insert(varSym);
        }
      }
    }

    this.visitChildren(node);
    this.popScope();
  }

  private visitParameters(funcNode: Node): void {
    const paramsNode = funcNode.childForFieldName("parameters");
    if (!paramsNode) return;

    const typedNameList = this.findChild(paramsNode, "typed_name_list");
    if (!typedNameList) return;

    for (const typedName of typedNameList.namedChildren) {
      if (typedName.type !== "typed_name") continue;

      const nameNode = typedName.childForFieldName("name");
      if (!nameNode) continue;

      const symbol = new ParameterSymbol(
        nameNode.text,
        this.currentScope,
        toRange(typedName),
        "POSITIONAL_OR_KEYWORD"
      );

      const typeNode = typedName.childForFieldName("type");
      if (typeNode) {
        const resolved = this.resolveType(typeNode);
        if (resolved) {
          symbol.value = resolved;
          symbol.type = resolved;
        }
      }

      if (FunctionSymbol.isFunctionSymbol(this.currentScope)) {
        this.currentScope.arguments.push(symbol);
      }
      this.currentScope.insert(symbol);
    }
  }

  private resolveType(typeExpr: Node) {
    if (typeExpr.type === "identifier") {
      return this.symbolTable.getSymbolByName(typeExpr.text);
    }
    return undefined;
  }

  private visitReturnType(funcNode: Node, symbol: FunctionSymbol): void {
    const retTypeNode = funcNode.childForFieldName("return_type");
    if (retTypeNode) {
      const typeExpr = retTypeNode.namedChildren[0];
      if (typeExpr) {
        const resolved = this.resolveType(typeExpr);
        symbol.retType = resolved ?? null;
      }
    } else {
      symbol.retType = null;
    }
  }

  private inferTypes(node: Node): void {
    if (
      node.type === "const_declaration" ||
      node.type === "var_assign_declaration"
    ) {
      const initNode = node.childForFieldName("initializer")
        ?? this.findChild(node, "initializer");
      const valueNode = initNode?.childForFieldName("value");
      if (!valueNode) {
        this.inferTypesChildren(node);
        return;
      }

      // 변수 이름 찾기
      const names: string[] = [];
      if (node.type === "const_declaration") {
        const namesNode = this.findChild(node, "names");
        if (namesNode) {
          for (const n of namesNode.namedChildren) {
            if (n.type === "identifier") names.push(n.text);
          }
        }
      } else {
        const typedNameList = this.findChild(node, "typed_name_list");
        if (typedNameList) {
          for (const tn of typedNameList.namedChildren) {
            if (tn.type !== "typed_name") continue;
            const nameNode = tn.childForFieldName("name");
            if (nameNode) names.push(nameNode.text);
          }
        }
      }

      const resolved = this.resolveExpression(valueNode);
      if (resolved) {
        for (const name of names) {
          const symbol = this.currentScope.getSymbolByName(name);
          if (symbol && VariableSymbol.isVariableSymbol(symbol) && !symbol.value) {
            symbol.value = resolved;
          }
        }
      }
    }

    // 스코프 추적 (Pass 1과 같은 순서)
    if (
      node.type === "function_declaration" ||
      node.type === "object_method_declaration"
    ) {
      const nameNode = node.childForFieldName("name");
      if (nameNode) {
        const sym = this.currentScope.getSymbolByName(nameNode.text);
        if (sym && BaseScope.isBaseScope(sym)) {
          this.pushScope(sym);
          this.inferTypesChildren(node);
          this.popScope();
          return;
        }
      }
    } else if (node.type === "object_declaration") {
      const nameNode = node.childForFieldName("name");
      if (nameNode) {
        const sym = this.currentScope.getSymbolByName(nameNode.text);
        if (sym && BaseScope.isBaseScope(sym)) {
          this.pushScope(sym);
          this.inferTypesChildren(node);
          this.popScope();
          return;
        }
      }
    }

    this.inferTypesChildren(node);
  }

  private inferTypesChildren(node: Node): void {
    for (const child of node.children) {
      this.inferTypes(child);
    }
  }

  /**
   * 표현식에서 타입 심볼을 해석.
   * call_expression → 함수의 retType 또는 같은 이름의 class
   * identifier → 심볼 테이블에서 조회
   * member_expression → 재귀적으로 해석
   */
  private resolveExpression(node: Node): any {
    switch (node.type) {
      case "identifier": {
        return this.symbolTable.getSymbolByName(node.text);
      }
      case "call_expression": {
        const funcNode = node.childForFieldName("function");
        if (!funcNode) return undefined;
        const funcSymbol = this.resolveExpression(funcNode);
        // Rect() → ClassSymbol("Rect") 반환
        if (ClassSymbol.isClassSymbol(funcSymbol)) return funcSymbol;
        // getUnit() → FunctionSymbol.retType 반환
        if (FunctionSymbol.isFunctionSymbol(funcSymbol) && funcSymbol.retType) {
          return funcSymbol.retType;
        }
        return undefined;
      }
      case "member_expression": {
        const objectNode = node.childForFieldName("object");
        const propertyNode = node.childForFieldName("property");
        if (!objectNode || !propertyNode) return undefined;
        const objectSymbol = this.resolveExpression(objectNode);
        if (objectSymbol && BaseScope.isBaseScope(objectSymbol)) {
          return objectSymbol.getSymbolByName(propertyNode.text);
        }
        if (
          VariableSymbol.isVariableSymbol(objectSymbol) &&
          objectSymbol.value &&
          BaseScope.isBaseScope(objectSymbol.value)
        ) {
          return objectSymbol.value.getSymbolByName(propertyNode.text);
        }
        return undefined;
      }
      default:
        return undefined;
    }
  }

  private findChild(node: Node, type: string): Node | undefined {
    return node.children.find((c) => c.type === type);
  }
}
