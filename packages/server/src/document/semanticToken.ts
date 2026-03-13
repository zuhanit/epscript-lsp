import { SemanticTokensBuilder } from "vscode-languageserver";
import { ContextPackage } from "../context/IContextPackage";
import type { Node } from "web-tree-sitter";

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

const tokenTypeMap: Record<string, number | undefined> = {
  function_declaration: TokenType.function,
  object_declaration: TokenType.class,
  object_method_declaration: TokenType.method,
  identifier: TokenType.variable,
  number: TokenType.number,
  string: TokenType.string,
  comment: TokenType.comment,
};

export function provideTokens(
  contextPackage: ContextPackage
): SemanticTokensBuilder {
  const builder = new SemanticTokensBuilder();
  visitNode(contextPackage.parsePackage.ast.rootNode, builder);
  return builder;
}

function visitNode(
  node: Node,
  builder: SemanticTokensBuilder
): void {
  const tokenType = tokenTypeMap[node.type];
  if (tokenType !== undefined && node.childCount === 0) {
    builder.push(
      node.startPosition.row,
      node.startPosition.column,
      node.endPosition.column - node.startPosition.column,
      tokenType,
      0
    );
  }

  for (const child of node.children) {
    visitNode(child, builder);
  }
}
