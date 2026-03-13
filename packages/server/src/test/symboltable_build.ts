import { TextDocument } from "vscode-languageserver-textdocument";
import { Parser } from "../parser";
import { VariableSymbol } from "../context/symbolTable/VariableSymbol";

const source = `
object Rect {
    var width;
    var height;

    function size() {
        return width * height;
    }
}

function getRect(): Rect {
    return Rect();
}

const r = Rect();
var s = Rect();
var t = getRect();
const u = 100;
`;

async function main() {
  const parser = await Parser.create();
  const doc = TextDocument.create("test://test.eps", "epscript", 0, source);
  const result = parser.parse(doc);
  const symbolTable = result.symbolTable;

  console.log("=== Global Symbols (with inferred types) ===");
  for (const sym of symbolTable.globalScope.getSymbols()) {
    if (VariableSymbol.isVariableSymbol(sym)) {
      console.log(`  ${sym.constructor.name}: ${sym.name} -> value: ${sym.value?.name ?? "undefined"}`);
    } else {
      console.log(`  ${sym.constructor.name}: ${sym.name}`);
    }
  }
}

main();
