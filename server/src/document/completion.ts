import { CandidateRule, TokenList } from "antlr4-c3";
import { Token } from "antlr4ts";
import {
  CompletionItem,
  CompletionItemKind,
  CompletionParams,
} from "vscode-languageserver";
import { Analyzer } from "../analyzer";
import {
  getSymbolInfo,
  symbolKindToCompletionKind,
  translateSymbolKindToCompletionKind,
} from "../context/facade";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { ClassSymbol } from "../context/symbolTable/ClassSymbol";
import { FunctionSymbol } from "../context/symbolTable/FunctionSymbol";
import { ISymbol } from "../context/symbolTable/ISymbol";
import { ModuleSymbol } from "../context/symbolTable/ModuleSymbol";
import { ParameterSymbol } from "../context/symbolTable/ParameterSymbol";
import { VariableSymbol } from "../context/symbolTable/VariableSymbol";
import {
  epScriptParser,
  SingleExpressionContext,
} from "../grammar/src/grammar/lib/epScriptParser";
import {
  SCTrgAIScript,
  SCTrgComparison,
  SCTrgEncode,
  SCTrgModifier,
  SCTrgOrder,
  SCTrgPlayer,
  SCTrgResource,
  SCTrgScore,
  SCTrgUnit,
} from "../lib/builtins/encodes";
import { literalToType } from "../util/literalUtils";
import { ProviderOption } from "./provider-option";
import { getActiveParameterNumber } from "./utils/paramUtil";

export function provideCompletion(
  { params, contextPackage }: ProviderOption<CompletionParams>,
  scope: BaseScope,
  analyzer: Analyzer,
  evaluated: any,
  singleExpression: SingleExpressionContext
): CompletionItem[] {
  const result: CompletionItem[] = [];

  const core = contextPackage.parsePackage.core;
  const tokenStream = contextPackage.parsePackage.tokenStream;
  const symbolTable = contextPackage.parsePackage.symbolTable;

  core.ignoredTokens = ignoredTokenSets;
  core.preferredRules = new Set([epScriptParser.RULE_singleExpression]);

  let index: number;
  tokenStream.fill();
  for (index = 0; ; ++index) {
    const token = tokenStream.get(index);
    if (token.type === Token.EOF || token.line > params.position.line + 1) {
      break;
    }
    if (token.line < params.position.line + 1) {
      continue;
    }
    const length = token.text ? token.text.length : 0;
    if (token.charPositionInLine + length >= params.position.character) {
      break;
    }
  }

  const candidates = core.collectCandidates(index);

  candidates.tokens.forEach((following: TokenList, type: number) => {
    const label =
      epScriptParser.VOCABULARY.getSymbolicName(type)?.toLowerCase();
    if (label) {
      result.push({
        label: label,
        detail: label,
        kind: CompletionItemKind.Keyword,
      });
    }
  });
  candidates.rules.forEach((rule: CandidateRule, key: number) => {
    switch (key) {
      case epScriptParser.RULE_singleExpression:
        if (index >= 1 && tokenStream.get(index).text === ".") {
          // MemberDotExpression
          const prevTokenText = tokenStream.get(index - 1).text;
          if (prevTokenText === undefined) break; // Invalid Token?

          const prevSymbol = symbolTable.getSymbolByName(prevTokenText);
          if (
            VariableSymbol.isVariableSymbol(prevSymbol) &&
            (ModuleSymbol.isModule(prevSymbol.value) ||
              ClassSymbol.isClassSymbol(prevSymbol.value))
          ) {
            prevSymbol.value.getSymbols().forEach((x) => {
              result.push(getCompletionForSymbol(x));
            });
          }
          if (
            ModuleSymbol.isModule(prevSymbol) ||
            ClassSymbol.isClassSymbol(prevSymbol)
          ) {
            prevSymbol.getSymbols().forEach((x) => {
              result.push(getCompletionForSymbol(x));
            });
          }
        } else if (index >= 2 && tokenStream.get(index - 1).text === ".") {
          // MemberDotExpression인데, 썼다가 지운 경우. (예: string.getT)
          const prevTokenText = tokenStream.get(index - 2).text;
          if (prevTokenText === undefined) break; // Invalid Token?

          const prevSymbol = symbolTable.getSymbolByName(prevTokenText);
          if (
            VariableSymbol.isVariableSymbol(prevSymbol) &&
            (ModuleSymbol.isModule(prevSymbol.value) ||
              ClassSymbol.isClassSymbol(prevSymbol.value))
          ) {
            prevSymbol.value.getSymbols().forEach((x) => {
              result.push(getCompletionForSymbol(x));
            });
          }
          if (
            ModuleSymbol.isModule(prevSymbol) ||
            ClassSymbol.isClassSymbol(prevSymbol)
          ) {
            prevSymbol.getSymbols().forEach((x) => {
              result.push(getCompletionForSymbol(x));
            });
          }
        } else {
          scope.getSymbolsUntilThis().forEach((x) => {
            result.push(getCompletionForSymbol(x));
          });
        }
        if (FunctionSymbol.isFunctionSymbol(evaluated)) {
          evaluated.arguments.forEach((arg) => {
            if (
              arg.paramKind === "KEYWORD_ONLY" ||
              arg.paramKind === "POSITIONAL_OR_KEYWORD" ||
              arg.paramKind === "VAR_KEYWORD"
            ) {
              arg.paramKind;
              result.push({
                label: arg.name + "=",
              });
            }
          });
          result.push(...getTypeCompletion(evaluated, singleExpression));
        }
        break;
    }
  });

  return result;
}

const ignoredTokenSets = new Set([
  epScriptParser.BooleanLiterl,
  epScriptParser.DecimalLiteral,
  epScriptParser.HexIntegerLiteral,
  epScriptParser.OpenBracket,
  epScriptParser.CloseBracket,
  epScriptParser.OpenParen,
  epScriptParser.CloseParen,
  epScriptParser.OpenBrace,
  epScriptParser.CloseBrace,
  epScriptParser.Dot,
  epScriptParser.QuestionMark,
  epScriptParser.Comma,
  epScriptParser.Colon,
  epScriptParser.SemiColon,
  epScriptParser.PlusPlus,
  epScriptParser.MinusMinus,
  epScriptParser.PlusAssign,
  epScriptParser.MinusAssign,
  epScriptParser.MultiplyAssign,
  epScriptParser.LeftShiftArithmeticAssign,
  epScriptParser.RightShiftArithmeticAssign,
  epScriptParser.BitAndAssign,
  epScriptParser.BitXorAssign,
  epScriptParser.BitOrAssign,
  epScriptParser.And,
  epScriptParser.Or,
  epScriptParser.LeftShiftArithmetic,
  epScriptParser.RightShiftArithmetic,
  epScriptParser.BitNot,
  epScriptParser.BitAnd,
  epScriptParser.BitOr,
  epScriptParser.BitXOr,
  epScriptParser.Equals,
  epScriptParser.LessThanEquals,
  epScriptParser.GreaterThanEquals,
  epScriptParser.LessThan,
  epScriptParser.MoreThan,
  epScriptParser.NotEquals,
  epScriptParser.Not,
  epScriptParser.Plus,
  epScriptParser.Minus,
  epScriptParser.Multiply,
  epScriptParser.Divide,
  epScriptParser.Modulus,
  epScriptParser.Assign,
  epScriptParser.L2V,
  epScriptParser.Identifier,
  epScriptParser.StringLiteral,
  epScriptParser.WhiteSpaces,
  epScriptParser.LineTerminator,
  epScriptParser.MultiLineComment,
  epScriptParser.SingleLineComment,
  epScriptParser.UnexpectedCharacter,
  epScriptParser.DoubleStringCharacter,
  epScriptParser.SingleStringCharacter,
  epScriptParser.EOF,
]);

function getCompletionForSymbol(symbol: ISymbol): CompletionItem {
  const info = getSymbolInfo(symbol);

  return {
    label: info.name,
    detail: info.detail,
    kind: translateSymbolKindToCompletionKind(info.kind),
  };
}

function getTypeCompletion(
  symbol: FunctionSymbol,
  singleExpression: SingleExpressionContext
) {
  const activeParameter = getActiveParameterNumber(
    singleExpression,
    getSymbolInfo(symbol)
  );
  if (activeParameter != -1 && activeParameter <= symbol.arguments.length) {
    const curr = symbol.arguments[activeParameter];
    if (curr.type instanceof ClassSymbol) {
      console.log(curr, curr.type);
      switch (curr.type.name) {
        case "TrgAIScript":
          return getEncodeCompletion("TrgAIScript");
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
    label: `"${el}"`,
    kind: CompletionItemKind.Constant,
  });
  switch (encode) {
    case "TrgAIScript":
      return SCTrgAIScript.map((el) => generate(el));
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
      return SCTrgUnit.map((el) => generate(el));
  }
  return [];
}
