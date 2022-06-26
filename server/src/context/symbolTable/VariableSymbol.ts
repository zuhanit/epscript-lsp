import { ParserRuleContext } from "antlr4ts";
import { Position, Range } from "vscode-languageserver";
import { Literal } from "../evaluator/literal";
import { BaseScope } from "./BaseScope";
import { BaseSymbol } from "./BaseSymbol";
import { IScope } from "./IScope";
import { Type } from "./Type";
import { TypedSymbol } from "./TypedSymbol";

export type Modifier = "var" | "const";
export class VariableSymbol extends BaseSymbol {
  modifier: Modifier = "var";
  value: Literal;

  constructor(
    name: string,
    scope: BaseScope,
    range: Range,
    defNode?: ParserRuleContext
  ) {
    super(name, range, scope, defNode);
  }

  public static isVariableSymbol(arg: any): arg is VariableSymbol {
    return arg instanceof VariableSymbol;
  }
}
