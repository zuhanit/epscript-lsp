import { ParserRuleContext } from "antlr4ts";
import { Diagnostic } from "vscode-languageserver";
import { LanguageManager } from "../../i18n/LanguageManager";
import { BaseScope } from "../symbolTable/BaseScope";
import { SymbolTable } from "../symbolTable/SymbolTable";

export interface EvaluatorOption<T extends ParserRuleContext> {
  node: T;
  symbolTable: SymbolTable;
  currentScope: BaseScope;
  languageManager: LanguageManager;
  diagnostics: Diagnostic[];
}
