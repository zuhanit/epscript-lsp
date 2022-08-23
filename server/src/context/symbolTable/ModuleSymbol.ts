import { ISymbol } from "./ISymbol";
import { SymbolWithScope } from "./SymbolWithScope";
import { Type } from "./Type";
import { TypedSymbol } from "./TypedSymbol";

export class ModuleSymbol extends SymbolWithScope implements TypedSymbol {
  type: Type = { name: "module" };

  public getAllSymbols(): ISymbol[] {
    return [];
  }

  public static isModule(arg: any): arg is ModuleSymbol {
    return arg instanceof ModuleSymbol;
  }
}
