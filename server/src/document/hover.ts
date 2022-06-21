import { Hover, HoverParams, MarkupContent } from "vscode-languageserver";
import { Literal } from "../context/evaluator/literal";
import { getSymbolInfo } from "../context/facade";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import { ISymbol } from "../context/symbolTable/ISymbol";
import { ProviderOption } from "./provider-option";

export function provideHoverItem(
  { params, contextPackage, name }: ProviderOption<HoverParams>,
  evaluated: Literal
): Hover | undefined {
  const symbolTable = contextPackage.parsePackage.symbolTable;
  const symbol = symbolTable.getSymbolByName(name);
  let content: MarkupContent | undefined;

  // if (evaluated instanceof BaseScope || evaluated instanceof BaseSymbol) content = getDocumentationForSymbol(evaluated);
  if (symbol) content = getDocumentationForSymbol(symbol); // FIXME: 이름이 중복됐을 경우 문제 해결 필요

  if (content) {
    return {
      contents: content,
    };
  }

  return undefined;
}

/**
 * 심볼에 따른 Hover 내용을 얻어오기 위한 함수.
 *
 * @param symbol 설명을 얻어올 심볼
 * @returns
 */
function getDocumentationForSymbol(symbol: ISymbol): MarkupContent {
  const value: string[] = ["```epscript"];

  const info = getSymbolInfo(symbol);
  value.push(info.detail);
  value.push("```");
  info.documentation && value.push(info.documentation);

  return {
    kind: "markdown",

    value: value.join("\n"),
  };
}
