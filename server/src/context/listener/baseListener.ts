import {
  ExpressionStatementContext,
  ForeachStatementContext,
  FormalParameterArgContext,
  ForStatementContext,
  FunctionDeclarationContext,
  IfStatementContext,
  ImportStatementContext,
  ObjectDeclarationContext,
  ObjectVariableDeclarationContext,
  VariableDeclarationListContext,
  WhileStatementContext,
} from "../../grammar/src/grammar/lib/epScriptParser";
import { epScriptParserListener } from "../../grammar/src/grammar/lib/epScriptParserListener";
import {
  pushBuiltinClass,
  pushBuiltinFunction,
} from "../../lib/builtins/builtin";
import { BaseScope } from "../symbolTable/BaseScope";
import { FunctionSymbol as FunctionSymbol } from "../symbolTable/FunctionSymbol";
import { IScope } from "../symbolTable/IScope";
import { ParameterSymbol } from "../symbolTable/ParameterSymbol";
import { VariableSymbol } from "../symbolTable/VariableSymbol";
import { LocalScope } from "../symbolTable/LocalScope";
import { getRangeByContext, zeroRange } from "../../util/range";
import { ClassSymbol } from "../symbolTable/ClassSymbol";
import { MemberSymbol } from "../symbolTable/MemberSymbol";
import { ISymbol } from "../symbolTable/ISymbol";
import { MethodSymbol } from "../symbolTable/MethodSymbol";
import { ModuleSymbol } from "../symbolTable/ModuleSymbol";
import { evaluateNode } from "../evaluator/evaluator";
import { Literal } from "../evaluator/literal";
import { Parser } from "../../parser";
import { Analyzer } from "../../analyzer";
import { existsSync, readFileSync } from "fs";
import { TextDocument } from "vscode-languageserver-textdocument";
import { ContextSymbolTable } from "../ContextSymbolTable";
import { URI as VSURI } from "vscode-uri";
import * as path from "path";
import { Diagnostic } from "vscode-languageserver";
import { keys, LanguageManager } from "../../i18n/LanguageManager";
import { CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { getDocumentation } from "../../util/docUtil";

/**
 * 심볼 테이블 작성을 위한 ANTLR 리스너.
 */
export class BaseListener implements epScriptParserListener {
  public symbolTable: ContextSymbolTable;
  public currentScope: BaseScope;

  constructor(
    public parser: Parser,
    public document: TextDocument,
    public analyzer: Analyzer,
    public diagnostics: Diagnostic[],
    public languageManager: LanguageManager,
    public tokenStream: CommonTokenStream
  ) {
    this.symbolTable = new ContextSymbolTable(document);
    this.currentScope = this.symbolTable.globalScope;
  }

  enterProgram(): void {
    pushBuiltinClass(this.symbolTable.predefinedScope);
    pushBuiltinFunction(this.symbolTable.predefinedScope);
  }

  /**
   * Expression
   * Expression들은 모두 해석되어 Symbol들을 넘겨준다.
   */

  enterExpressionStatement(ctx: ExpressionStatementContext) {
    ctx
      .expressionSequence()
      .singleExpression()
      .forEach((expr) =>
        evaluateNode({
          node: expr,
          currentScope: this.currentScope,
          symbolTable: this.symbolTable,
          languageManager: this.languageManager,
          diagnostics: this.diagnostics,
        })
      );
  }

  // 임포트 진입
  enterImportStatement(ctx: ImportStatementContext) {
    // FIXME: 파이썬 파일도 처리할 수 있게 해야 합니다. 분기를 나눠서 처리하도록...
    const namespace = ctx.importNamespace();
    const dotted = ctx.dottedName().text.split(".");
    let name: string = dotted[dotted.length - 1];

    if (namespace !== undefined) {
      name = namespace.identifier().text;
      this.checkSymbolDuplicated(name, namespace.identifier());
    }

    this.checkSymbolDuplicated(name, ctx.dottedName().identifier());

    const symbol = new ModuleSymbol(
      name,
      getRangeByContext(ctx.dottedName()),
      getRangeByContext(ctx),
      this.currentScope
    );

    // analyzer에서 패키지를 가져오기 위해 파일 경로를 조합해줘야 합니다.
    const currentPath = path.parse(VSURI.parse(this.document.uri).fsPath);
    const basePath = path.join(
      currentPath.dir,
      "..",
      ...dotted.slice(0, dotted.length - 1),
      dotted[dotted.length - 1]
    );
    if (existsSync(basePath + ".eps")) {
      const epsPath = basePath + ".eps";
      const importURI = VSURI.file(epsPath).toString();
      const contextPackage = this.analyzer.getContextPackageByURI(importURI);
      if (contextPackage) {
        contextPackage.parsePackage.symbolTable.globalScope
          .getSymbols()
          .forEach((x) => {
            const moduleSymbol = x as BaseScope;
            moduleSymbol.blockRange = zeroRange;
            symbol.symbols.set(moduleSymbol.name, moduleSymbol);
          });
        symbol.scope = contextPackage.parsePackage.symbolTable.globalScope;
      } else {
        const fileContent = readFileSync(epsPath, "utf8");
        const result = this.analyzer.analyze(
          importURI.toString(),
          TextDocument.create(importURI.toString(), "eps", 0, fileContent),
          this.languageManager,
          true
        );

        result.parsePackage.symbolTable.globalScope
          .getSymbols()
          .forEach((x) => {
            const moduleSymbol = x as BaseScope;
            moduleSymbol.blockRange = zeroRange;
            symbol.symbols.set(moduleSymbol.name, moduleSymbol);
          });
      }
    }

    this.currentScope.symbols.set(symbol.name, symbol); // insert 메소드 사용시 심볼의 스코프가 강제로 currentScope로 고정되기 때문에 심볼 맵을 직접 수정합니다.`
    this.pushScope(symbol);
  }

  // 임포트 탈출
  exitImportStatement() {
    this.popScope();
  }

  // 변수 선언 진입
  enterVariableDeclarationList(ctx: VariableDeclarationListContext) {
    const modifier: string = ctx.varModifier().text;
    const symbols = ctx.variableDeclaration().map((x) => {
      let value: Literal = null;
      if (x.singleExpression() !== undefined)
        value = evaluateNode({
          node: x.singleExpression()!,
          symbolTable: this.symbolTable,
          currentScope: this.currentScope,
          languageManager: this.languageManager,
          diagnostics: this.diagnostics,
        });
      const symbol = new VariableSymbol(
        x.assignAble().text,
        this.currentScope,
        getRangeByContext(x.assignAble())
      );
      symbol.value = value;
      symbol.modifier = modifier === "var" ? "var" : "const";
      this.checkSymbolDuplicated(symbol.name, x.assignAble().identifier());
      return symbol;
    });
    symbols.forEach((x) => this.currentScope.insert(x));
  }

  // 함수 선언 진입
  enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
    const isParentClassSymbol = function (parent: IScope | ISymbol): boolean {
      if (parent instanceof ClassSymbol) return true;
      return false;
    };
    const symbol = isParentClassSymbol(this.currentScope)
      ? new MethodSymbol(
          ctx.identifier().text,
          getRangeByContext(ctx.identifier()),
          getRangeByContext(ctx),
          this.currentScope
        )
      : new FunctionSymbol(
          ctx.identifier().text,
          getRangeByContext(ctx.identifier()),
          getRangeByContext(ctx),
          this.currentScope
        );

    const typeAnnotation = ctx.typeAnnotation()?.singleExpression();
    symbol.docString = getDocumentation(ctx, this.tokenStream);
    if (typeAnnotation) {
      const resolved = evaluateNode({
        node: typeAnnotation,
        symbolTable: this.symbolTable,
        currentScope: this.currentScope,
        languageManager: this.languageManager,
        diagnostics: this.diagnostics,
      });
      if (resolved) symbol.retType = resolved;
    } else {
      symbol.retType = null;
    }

    this.checkSymbolDuplicated(ctx.identifier().text, ctx.identifier());
    this.currentScope.insert(symbol);
    this.pushScope(symbol);
  }

  // 함수 선언 탈출
  exitFunctionDeclaration() {
    this.popScope();
  }

  // 함수 파라미터 진입
  enterFormalParameterArg(ctx: FormalParameterArgContext) {
    const symbol = new ParameterSymbol(
      ctx.assignAble().text,
      this.currentScope,
      getRangeByContext(ctx),
      "POSITIONAL_ONLY"
    );

    const typeAnnotation = ctx.typeAnnotation()?.singleExpression();
    if (typeAnnotation) {
      const resolved = evaluateNode({
        node: typeAnnotation,
        symbolTable: this.symbolTable,
        currentScope: this.currentScope,
        languageManager: this.languageManager,
        diagnostics: this.diagnostics,
      });
      if (resolved) {
        symbol.value = resolved;
        symbol.type = resolved;
      }
    } else {
      symbol.value = null;
    }

    if (FunctionSymbol.isFunctionSymbol(this.currentScope))
      this.currentScope.arguments.push(symbol);

    this.currentScope.insert(symbol);
  }

  enterObjectDeclaration(ctx: ObjectDeclarationContext) {
    const symbol = new ClassSymbol(
      ctx.identifier().text,
      getRangeByContext(ctx.identifier()),
      getRangeByContext(ctx),
      this.currentScope
    );
    symbol.docString = getDocumentation(ctx, this.tokenStream);
    this.checkSymbolDuplicated(ctx.identifier().text, ctx.identifier());
    this.currentScope.insert(symbol);
    this.pushScope(symbol);
  }

  enterObjectVariableDeclaration(ctx: ObjectVariableDeclarationContext) {
    const symbol = new MemberSymbol(
      ctx.identifier().text,
      this.currentScope,
      getRangeByContext(ctx)
    );
    const typeAnnotation = ctx.typeAnnotation()?.singleExpression();
    if (typeAnnotation) {
      const resolved = evaluateNode({
        node: typeAnnotation,
        symbolTable: this.symbolTable,
        currentScope: this.currentScope,
        languageManager: this.languageManager,
        diagnostics: this.diagnostics,
      });
      if (resolved) symbol.value = resolved;
    }
    this.checkSymbolDuplicated(ctx.identifier().text, ctx.identifier());
    this.currentScope.insert(symbol);
  }

  exitObjectDeclaration() {
    this.popScope();
  }

  // *** Block Scope *** //

  // if문 진입
  enterIfStatement(ctx: IfStatementContext) {
    const symbol = new LocalScope(getRangeByContext(ctx), this.currentScope);
    this.currentScope.insert(symbol);
    this.pushScope(symbol);
  }

  // if문 탈출
  exitIfStatement() {
    this.popScope();
  }

  enterForeachStatement(ctx: ForeachStatementContext) {
    const symbol = new LocalScope(getRangeByContext(ctx), this.currentScope);
    const symbols = ctx
      .foreachBlock()
      .identifier()
      .map(
        (x) =>
          new VariableSymbol(
            x.Identifier().text,
            symbol,
            getRangeByContext(x),
            x
          )
      );
    symbols.forEach((x) => symbol.insert(x));
    this.currentScope.insert(symbol);
    this.pushScope(symbol);
  }

  exitForeachStatement() {
    this.popScope();
  }

  enterWhileStatement(ctx: WhileStatementContext) {
    const symbol = new LocalScope(getRangeByContext(ctx), this.currentScope);
    this.currentScope.insert(symbol);
    this.pushScope(symbol);
  }

  exitWhileStatement() {
    this.popScope();
  }

  enterForStatement(ctx: ForStatementContext) {
    const symbol = new LocalScope(getRangeByContext(ctx), this.currentScope);

    this.currentScope.insert(symbol);
    this.pushScope(symbol);
  }

  exitForStatement() {
    this.popScope();
  }

  /**
   * 스코프 집어넣기.
   * @param scope 대상 스코프
   */
  private pushScope(scope: BaseScope): void {
    this.currentScope = scope;
  }

  /**
   * 부모 스코프로 이동.
   */
  private popScope(): void {
    if (this.currentScope.parent) {
      this.currentScope = this.currentScope.parent;
    } else {
      throw new Error("Cannot pop scope at Root Scope");
    }
  }

  /**
   * 심볼명이 중복되어있는지 확인
   */
  private checkSymbolDuplicated(name: string, t: ParserRuleContext) {
    const duplicatedSymbol = this.currentScope
      .getSymbolsUntilThis()
      .find((x) => x.name === name);
    if (duplicatedSymbol)
      this.diagnostics.push({
        message:
          this.languageManager.getDiagnosticsKey(
            keys["diagnostics.duplicatedIdentifier"]
          ) +
          ": " +
          name,
        range: {
          start: {
            character: t.start.charPositionInLine,
            line: t.start.line,
          },
          end: {
            character:
              t.stop && t.stop.text
                ? t.stop.charPositionInLine + t.stop.text?.length
                : t.start.charPositionInLine,
            line: t.stop ? t.stop.line : t.start.line,
          },
        },
      });
  }
}
