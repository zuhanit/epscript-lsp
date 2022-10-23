import { DocumentSymbol } from "vscode-languageserver";
import { getSymbolInfo } from "../context/facade";
import { ContextPackage } from "../context/IContextPackage";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import { ParameterSymbol } from "../context/symbolTable/ParameterSymbol";

export function getDocumentSymbol(
  contextPackage: ContextPackage
): Promise<DocumentSymbol[]> {
  const result: DocumentSymbol[] =
    contextPackage.parsePackage.symbolTable.globalScope
      .getAllSymbols()
      .filter((symbol) => !ParameterSymbol.isParameterSymbol(symbol))
      .map((symbol) => {
        const bSymbol = symbol as BaseSymbol;
        const symbolInfo = getSymbolInfo(symbol);
        return {
          name: symbolInfo.name,
          kind: symbolInfo.kind,
          range: bSymbol.range,
          selectionRange: bSymbol.range,
        };
      });
  return new Promise((res) => {
    res(result);
  });
}
