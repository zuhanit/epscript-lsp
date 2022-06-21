import {
  DocumentSymbol,
  DocumentSymbolParams,
  SymbolInformation,
  URI,
} from "vscode-languageserver";
import { getSymbolInfo } from "../context/facade";
import { ContextPackage } from "../context/IContextPackage";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import { ParameterSymbol } from "../context/symbolTable/ParameterSymbol";
import { getDocumentSymbol } from "./documentSymbol";
import { ProviderOption } from "./provider-option";

export async function getWorkspaceSymbol(
  documentations: Map<URI, ContextPackage>
): Promise<SymbolInformation[]> {
  const result: SymbolInformation[] = [];
  documentations.forEach(async (value, key) => {
    const docSymbol = await getDocumentSymbol(value);
    docSymbol.forEach((symbol) =>
      result.push({
        name: symbol.name,
        kind: symbol.kind,
        location: {
          range: symbol.range,
          uri: key,
        },
      })
    );
  });
  console.log(result);
  return result;
}
