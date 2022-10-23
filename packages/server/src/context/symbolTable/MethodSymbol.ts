import { Range } from "vscode-languageserver";
import { BaseScope } from "./BaseScope";
import { FunctionSymbol } from "./FunctionSymbol";
import { Type } from "./Type";

export class MethodSymbol extends FunctionSymbol {
  type: Type = { name: "method" };

  constructor(name: string, range: Range, blockRange: Range, scope: BaseScope) {
    super(name, range, blockRange, scope);
  }

  public static isMethodSymbol(arg: any): arg is MethodSymbol {
    return arg instanceof MethodSymbol;
  }
}
