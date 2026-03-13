import { Diagnostic } from "vscode-languageserver";
import { LanguageManager } from "../../i18n/LanguageManager";
import { BaseScope } from "../symbolTable/BaseScope";
import { SymbolTable } from "../symbolTable/SymbolTable";
import type { Node } from "web-tree-sitter";

export interface EvaluatorOption {
  node: Node;
  symbolTable: SymbolTable;
  currentScope: BaseScope;
  languageManager: LanguageManager;
  diagnostics: Diagnostic[];
}
