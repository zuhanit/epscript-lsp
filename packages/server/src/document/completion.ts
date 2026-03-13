import {
  CompletionItem,
  CompletionItemKind,
  MarkupContent,
} from "vscode-languageserver";
import {
  getSymbolInfo,
  translateSymbolKindToCompletionKind,
} from "../context/facade";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { ClassSymbol } from "../context/symbolTable/ClassSymbol";
import { FunctionSymbol } from "../context/symbolTable/FunctionSymbol";
import { ISymbol } from "../context/symbolTable/ISymbol";
import { ModuleSymbol } from "../context/symbolTable/ModuleSymbol";
import { VariableSymbol } from "../context/symbolTable/VariableSymbol";
import {
  SCImage,
  SCIscript,
  SCTrgAIScript,
  SCTrgAllyStatus,
  SCTrgComparison,
  SCTrgEncode,
  SCTrgModifier,
  SCTrgOrder,
  SCTrgPlayer,
  SCTrgProperty,
  SCTrgResource,
  SCTrgScore,
  SCTrgSwitchAction,
  SCTrgSwitchState,
  SCTrgTBL,
  SCTrgUnit,
} from "../lib/builtins/encodes";
import { getActiveParameterNumber } from "./utils/paramUtil";
import { ContextSymbolTable } from "../context/ContextSymbolTable";
import { LanguageManager } from "../i18n/LanguageManager";
import { evaluateNode } from "../context/evaluator/evaluator";
import type { Node } from "web-tree-sitter";

const KEYWORDS: CompletionItem[] = [
  "import", "if", "else", "switch", "while", "foreach", "for",
  "return", "continue", "break", "once", "function", "object",
  "extends", "var", "static", "const", "true", "false", "none",
].map((kw) => ({
  label: kw,
  kind: CompletionItemKind.Keyword,
}));

export function provideCompletion(
  node: Node,
  scope: BaseScope,
  symbolTable: ContextSymbolTable,
  languageManager: LanguageManager
): CompletionItem[] {
  // 1. 주석 안 → 없음
  if (node.type === "comment") {
    return [];
  }

  // 2. dot 뒤 (불완전: `myVar.`) → node.type === "."
  if (node.type === ".") {
    const objectNode = node.previousSibling;
    if (objectNode) {
      return getMemberCompletions(objectNode, scope, symbolTable, languageManager);
    }
    return [];
  }

  // 3. dot 뒤 (완성: `myVar.get`) → parent가 member_expression
  if (node.parent?.type === "member_expression") {
    const objectNode = node.parent.childForFieldName("object");
    if (objectNode) {
      return getMemberCompletions(objectNode, scope, symbolTable, languageManager);
    }
    return [];
  }

  // 4. 함수 호출 인자 안
  const callExpression = findAncestor(node, "call_expression");
  if (callExpression) {
    const functionNode = callExpression.childForFieldName("function");
    if (functionNode) {
      const evaluated = evaluateNode({
        node: functionNode,
        currentScope: scope,
        diagnostics: [],
        languageManager,
        symbolTable,
      });

      if (FunctionSymbol.isFunctionSymbol(evaluated)) {
        const result: CompletionItem[] = [];

        evaluated.arguments.forEach((arg: any) => {
          if (
            arg.paramKind === "KEYWORD_ONLY" ||
            arg.paramKind === "POSITIONAL_OR_KEYWORD" ||
            arg.paramKind === "VAR_KEYWORD"
          ) {
            result.push({ label: arg.name + "=" });
          }
        });

        result.push(...getTypeCompletion(evaluated, callExpression));
        result.push(...getScopeCompletions(scope));
        return result;
      }
    }
  }

  // 5. 그 외 → scope 심볼 + 키워드
  return [...getScopeCompletions(scope), ...KEYWORDS];
}

function getMemberCompletions(
  objectNode: Node,
  scope: BaseScope,
  symbolTable: ContextSymbolTable,
  languageManager: LanguageManager
): CompletionItem[] {
  const evaluated = evaluateNode({
    node: objectNode,
    currentScope: scope,
    diagnostics: [],
    languageManager,
    symbolTable,
  });

  const result: CompletionItem[] = [];

  if (
    VariableSymbol.isVariableSymbol(evaluated) &&
    (ModuleSymbol.isModule(evaluated.value) ||
      ClassSymbol.isClassSymbol(evaluated.value))
  ) {
    evaluated.value.getSymbols().forEach((x) => {
      result.push(getCompletionForSymbol(x));
    });
  }
  if (
    ModuleSymbol.isModule(evaluated) ||
    ClassSymbol.isClassSymbol(evaluated)
  ) {
    evaluated.getSymbols().forEach((x) => {
      result.push(getCompletionForSymbol(x));
    });
  }

  return result;
}

function getScopeCompletions(scope: BaseScope): CompletionItem[] {
  return scope.getSymbolsUntilThis().map((x) => getCompletionForSymbol(x));
}

function findAncestor(node: Node, type: string): Node | undefined {
  let current: Node | null = node;
  while (current) {
    if (current.type === type) return current;
    current = current.parent;
  }
  return undefined;
}

function getCompletionForSymbol(symbol: ISymbol): CompletionItem {
  const info = getSymbolInfo(symbol);
  const documentation: MarkupContent | undefined = info.documentation
    ? {
        kind: "markdown",
        value: info.documentation,
      }
    : undefined;
  return {
    label: info.name,
    detail: info.detail,
    documentation: documentation,
    kind: translateSymbolKindToCompletionKind(info.kind),
  };
}

function getTypeCompletion(symbol: FunctionSymbol, node: Node) {
  const activeParameter = getActiveParameterNumber(node, getSymbolInfo(symbol));
  if (activeParameter != -1 && activeParameter <= symbol.arguments.length) {
    const curr = symbol.arguments[activeParameter];
    if (curr && curr.type instanceof ClassSymbol) {
      switch (curr.type.name) {
        case "TrgAIScript":
          return getEncodeCompletion("TrgAIScript");
        case "TrgAllyStatus":
          return getEncodeCompletion("TrgAllyStatus");
        case "TrgProperty":
          return getEncodeCompletion("TrgProperty");
        case "TrgSwitchState":
          return getEncodeCompletion("TrgSwitchState");
        case "TrgSwitchAction":
          return getEncodeCompletion("TrgSwitchAction");
        case "Image":
          return getEncodeCompletion("Image");
        case "Iscript":
          return getEncodeCompletion("Iscript");
        case "TrgTBL":
          return getEncodeCompletion("TrgTBL");
        case "TrgComparison":
          return getEncodeCompletion("TrgComparison");
        case "TrgModifier":
          return getEncodeCompletion("TrgModifier");
        case "TrgOrder":
          return getEncodeCompletion("TrgOrder");
        case "TrgPlayer":
          return getEncodeCompletion("TrgPlayer");
        case "TrgResource":
          return getEncodeCompletion("TrgResource");
        case "TrgScore":
          return getEncodeCompletion("TrgScore");
        case "TrgUnit":
          return getEncodeCompletion("TrgUnit");
      }
    }
  }
  return [];
}

function getEncodeCompletion(encode: SCTrgEncode) {
  const generate = (el: string): CompletionItem => ({
    label: `${el}`,
    kind: CompletionItemKind.Constant,
  });
  const generateWithQuotes = (el: string): CompletionItem => ({
    label: `"${el}"`,
    kind: CompletionItemKind.Constant,
  });
  switch (encode) {
    case "TrgAIScript":
      return SCTrgAIScript.map((el) => generateWithQuotes(el));
    case "TrgAllyStatus":
      return SCTrgAllyStatus.map((el) => generate(el));
    case "TrgProperty":
      return SCTrgProperty.map((el) => generate(el));
    case "TrgSwitchState":
      return SCTrgSwitchState.map((el) => generate(el));
    case "TrgSwitchAction":
      return SCTrgSwitchAction.map((el) => generate(el));
    case "Image":
      return SCImage.map((el) => generateWithQuotes(el));
    case "Iscript":
      return SCIscript.map((el) => generateWithQuotes(el));
    case "TrgTBL":
      return SCTrgTBL.map((el) => generateWithQuotes(el));
    case "TrgComparison":
      return SCTrgComparison.map((el) => generate(el));
    case "TrgModifier":
      return SCTrgModifier.map((el) => generate(el));
    case "TrgOrder":
      return SCTrgOrder.map((el) => generate(el));
    case "TrgPlayer":
      return SCTrgPlayer.map((el) => generate(el));
    case "TrgResource":
      return SCTrgResource.map((el) => generate(el));
    case "TrgScore":
      return SCTrgScore.map((el) => generate(el));
    case "TrgUnit":
      return SCTrgUnit.map((el) => generateWithQuotes(el));
  }
  return [];
}
