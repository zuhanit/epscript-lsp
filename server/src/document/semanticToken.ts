import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { SemanticTokensBuilder } from "vscode-languageserver";
import { ContextPackage } from "../context/IContextPackage";
import { SemanticTokenListener } from "../context/listener/SemanticTokenListener";

export const TokenType = {
  namespace: 0,
  class: 1,
  typeParameter: 2,
  parameter: 3,
  variable: 4,
  property: 5,
  function: 6,
  method: 7,
  comment: 8,
  string: 9,
  keyword: 10,
  operator: 11,
  number: 12,
};

export const tokenModifiers: string[] = [];

export type BuilderItem = [
  line: number,
  char: number,
  length: number,
  tokenType: number,
  tokenModifiers: number
];

export function provideTokens(
  contextPackage: ContextPackage
): SemanticTokensBuilder {
  const builder = new SemanticTokensBuilder();
  const listener = new SemanticTokenListener(builder);
  ParseTreeWalker.DEFAULT.walk(
    listener as ParseTreeListener,
    contextPackage.parsePackage.ast
  );
  return builder;
}
