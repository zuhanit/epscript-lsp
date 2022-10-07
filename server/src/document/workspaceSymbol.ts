import { SymbolInformation, URI } from "vscode-languageserver";
import { ContextPackage } from "../context/IContextPackage";
import { getDocumentSymbol } from "./documentSymbol";

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
  return result;
}
