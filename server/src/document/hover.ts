import { Hover, HoverParams, MarkupContent } from "vscode-languageserver";
import { Analyzer } from "../analyzer";
import { getSymbolInfo } from "../context/facade";
import { ISymbol } from "../context/symbolTable/ISymbol";
import { NumericLiteralContext } from "../grammar/lib/epScriptParser";
import { ProviderOption } from "./provider-option";
import offsets from "../offsets/offset.json";

export function provideHoverItem(
  { contextPackage, name, params }: ProviderOption<HoverParams>,
  analyzer: Analyzer
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

  const numerics = analyzer.getSingleRuleAtPosition(
    contextPackage.document.uri,
    params.position,
    NumericLiteralContext
  );
  const numeric = numerics ? numerics[0] : undefined;
  if (numeric && numeric.text.startsWith("0x")) {
    console.log(numeric.start.charPositionInLine + numeric.text.length);
    const targetNumeric = numeric.text.substring(2);
    const matchedOffset = offsets.find((offset) =>
      offset.address.includes(targetNumeric)
    );
    if (matchedOffset) {
      return {
        contents: getDocumentationForOffset(matchedOffset),
      };
    }
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
type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

function getDocumentationForOffset(
  offset: ArrayElement<typeof offsets>
): MarkupContent {
  const value: string[] = ["### 0x" + offset.address];
  value.push(`#### ${offset.name}`);
  offset.description && value.push(offset.description);
  offset.version && value.push(`- Version: ${offset.version}`);
  offset.id && value.push(`- Player ID: ${offset.id}`);
  offset.size && value.push(`- Size: ${offset.size}`);
  offset.length && value.push(`- Length: ${offset.length}`);
  offset.scr && value.push(`- Starcraft: Remastered: ${offset.scr}`);

  return {
    kind: "markdown",
    value: value.join("\n"),
  };
}
