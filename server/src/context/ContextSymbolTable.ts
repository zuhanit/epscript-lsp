import { TextDocument } from "vscode-languageserver-textdocument";
import { zeroRange } from "../util/range";
import { SymbolTable } from "./symbolTable/SymbolTable";

export class ContextSymbolTable extends SymbolTable {
  owner: TextDocument;

  constructor(owner: TextDocument) {
    super("SymbolTable", zeroRange, zeroRange);
    this.owner = owner;
  }
}
