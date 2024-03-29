import {
  Hover,
  HoverParams,
  MarkupContent,
  MarkupKind,
} from "vscode-languageserver";
import { Analyzer } from "../analyzer";
import { getSymbolInfo } from "../context/facade";
import { ISymbol } from "../context/symbolTable/ISymbol";
import {
  NumericLiteralExpressionContext,
  SingleExpressionContext,
} from "../grammar/lib/epScriptParser";
import { ProviderOption } from "./provider-option";
import offsets from "../offsets/offset.json";

export function provideHoverItem(
  { contextPackage, name }: ProviderOption<HoverParams>,
  analyzer: Analyzer,
  symbol: ISymbol,
  expr: SingleExpressionContext
): Hover | undefined {
  // If there are symbol from Analyzer, the server uses that first.
  if (symbol) {
    if (expr instanceof NumericLiteralExpressionContext) {
      return numericExpressionToHover(expr);
    }
    return {
      contents: getDocumentationForSymbol(symbol),
    };
  }

  const symbolByName =
    contextPackage.parsePackage.symbolTable.getSymbolByName(name);

  if (symbolByName) {
    return {
      contents: getDocumentationForSymbol(symbolByName),
    };
  }

  return undefined;
}

function numericExpressionToHover(
  expr: NumericLiteralExpressionContext
): Hover | undefined {
  const targetNumeric = expr.text.substring(2);
  const matchedOffset = offsets.find((offset) =>
    offset.addr.includes(targetNumeric)
  );
  if (matchedOffset) {
    return {
      contents: getDocumentationForOffset(matchedOffset),
    };
  } else {
    return undefined;
  }
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
  const desc = offset.desc
    .replace(/[\r\n]+([[:alnum:]])+/g, "\\\n$1")
    .replace("```\\", "```\n");
  const value: string[] = [
    "```",
    `(0x${offset.addr}) ${offset.name}\n`,
    "```",
    desc,
    "\\",
    "\\",
    `_@version_ — \`${offset.ver}\`\\`,
    `_@playerID_ — \`${offset.pid}\`\\`,
    `_@size_ — \`${offset.size}\`\\`,
    `_@length_ — \`${offset.len}\`\\`,
    `_@remastered_ — \`${offset.scr}\`\\`,
    "\\",
    `[Documentation Source](http://farty1billion.dyndns.org/EUDDB/?pg=entry&id=${offset.id})`,
  ];

  return {
    kind: MarkupKind.Markdown,
    value: value.join("\n"),
  };
}
