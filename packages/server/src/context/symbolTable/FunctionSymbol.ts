import { Range } from "vscode-languageserver";
import { Literal } from "../evaluator/literal";
import { BaseScope } from "./BaseScope";
import { ParameterSymbol } from "./ParameterSymbol";
import { SymbolWithScope } from "./SymbolWithScope";
import { TypedSymbol } from "./TypedSymbol";

export class FunctionSymbol extends SymbolWithScope implements TypedSymbol {
  type: Literal = "FunctionSymbol";
  retType: Literal;
  docString: string | undefined;
  arguments: ParameterSymbol[] = [];

  constructor(name: string, range: Range, blockRange: Range, scope: BaseScope) {
    super(name, range, blockRange, scope);
  }

  public static isFunctionSymbol(arg: any): arg is FunctionSymbol {
    return arg instanceof FunctionSymbol;
  }
}
