import { ParserRuleContext } from "antlr4ts";
import { Range } from "vscode-languageserver";
import { BaseScope } from "./BaseScope";
import { VariableSymbol } from "./VariableSymbol";

export type ParameterKind =
  | "POSITIONAL_ONLY"
  | "POSITIONAL_OR_KEYWORD"
  | "VAR_POSITIONAL"
  | "KEYWORD_ONLY"
  | "VAR_KEYWORD";

export type DefaultValue = {
  value: string;
  type: string;
};

/**
 * 매개인자 심볼.
 *
 */
export class ParameterSymbol extends VariableSymbol {
  docString = "";
  paramKind: ParameterKind;
  defaultValue: DefaultValue;

  constructor(
    name: string,
    scope: BaseScope,
    Range: Range,
    kind: ParameterKind,
    defaultValue: DefaultValue = { value: "empty", type: "str" },
    defNode?: ParserRuleContext
  ) {
    super(name, scope, Range, defNode);
    this.paramKind = kind;
    this.defaultValue = defaultValue;
  }

  public static isParameterSymbol(arg: any): arg is ParameterSymbol {
    return arg instanceof ParameterSymbol;
  }
}
