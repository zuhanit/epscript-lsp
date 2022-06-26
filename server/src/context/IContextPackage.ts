import { TextDocument } from "vscode-languageserver-textdocument";
import { ParsePackage } from "../parser";

export interface ContextPackage {
  document: TextDocument;
  parsePackage: ParsePackage;
}
