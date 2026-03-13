import { Range } from "vscode-languageserver";
import type { Node } from "web-tree-sitter";

export const zeroRange: Range = {
  start: {
    line: 0,
    character: 0,
  },
  end: {
    line: 0,
    character: 0,
  },
};

/**
 * tree-sitter 노드로부터 `Range` 얻어오기.
 *
 * @param node tree-sitter SyntaxNode
 * @returns Range
 */
export function getRangeByNode(node: Node): Range {
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
