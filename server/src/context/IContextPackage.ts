import { TextDocument } from "vscode-languageserver-textdocument";
import { ParsePackage } from "../parser";
import { SymbolTable } from "./symbolTable/SymbolTable";

export interface ContextPackage {
  document: TextDocument;
  parsePackage: ParsePackage;
}
