import { Definition, DefinitionParams, URI } from "vscode-languageserver";
import { ContextSymbolTable } from "../context/ContextSymbolTable";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import { ProviderOption } from "./provider-option";

export async function provideDefinition({
  contextPackage,
  name,
}: ProviderOption<DefinitionParams>): Promise<Definition | undefined> {
  const symbolTable = contextPackage.parsePackage.symbolTable;
  const symbol = symbolTable.getSymbolByName(name);

  if (symbol)
    return getDefinitionForSymbol(symbol, contextPackage.document.uri);
}

function getDefinitionForSymbol(symbol: BaseSymbol, uri: URI): Definition {
  const result: Definition = {
    range: symbol.range,
    uri: uri,
  };

  const symbolURI: URI | undefined = getSymbolTable(symbol)?.owner.uri;
  if (symbolURI) result.uri = symbolURI;

  return result;
}

function getSymbolTable(
  symbol: BaseSymbol | BaseScope
): ContextSymbolTable | undefined {
  if (symbol instanceof BaseSymbol) {
    let parent: BaseScope | undefined = symbol.scope;

    while (parent) {
      if (parent instanceof ContextSymbolTable) {
        return parent;
      }
      parent = parent.parent;
    }

    return undefined;
  } else {
    let parent: BaseScope | undefined = symbol.parent;

    while (parent) {
      if (parent instanceof ContextSymbolTable) {
        return parent;
      }
      parent = parent.parent;
    }

    return undefined;
  }
}
