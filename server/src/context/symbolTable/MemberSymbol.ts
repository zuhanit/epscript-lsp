import { Range } from "vscode-languageserver-textdocument";
import { BaseScope } from "./BaseScope";
import { Type } from "./Type";
import { VariableSymbol } from "./VariableSymbol";
export class MemberSymbol extends VariableSymbol {
  type: Type = { name: "member" };
  scope: BaseScope;

  constructor(name: string, scope: BaseScope, range: Range) {
    super(name, scope, range);
    this.scope = scope;
  }

  public static isMemberSymbol(arg: any): arg is MemberSymbol {
    return arg instanceof MemberSymbol;
  }
}
