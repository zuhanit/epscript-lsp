import { Range } from "vscode-languageserver";
import { BaseScope } from "./BaseScope";
import { SymbolWithScope } from "./SymbolWithScope";

/**
 * 전역 스코프.
 */
export class GlobalScope extends SymbolWithScope {
  constructor(range: Range, scope: BaseScope) {
    super("global", range, range, scope);
  }
}
