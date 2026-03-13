import type { Node } from "web-tree-sitter";
import { Diagnostic } from "vscode-languageserver";

export function pushDiagnostic(
  message: string,
  diagnostic: Diagnostic[],
  t: Node
): void;

export function pushDiagnostic(
  message: string,
  diagnostic: Diagnostic[],
  t: Node
) {
  diagnostic.push({
    message: message,
    range: {
      start: {
        character: t.startPosition.column,
        line: t.startPosition.row,
      },
      end: {
        character: t.endPosition.column,
        line: t.endPosition.row,
      },
    },
  });
}
