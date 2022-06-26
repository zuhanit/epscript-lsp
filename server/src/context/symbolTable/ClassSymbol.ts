import { Range } from "vscode-languageserver";
import { BaseScope } from "./BaseScope";
import { MethodSymbol } from "./MethodSymbol";
import { ParameterSymbol } from "./ParameterSymbol";
import { SymbolWithScope } from "./SymbolWithScope";
import { Type } from "./Type";
import { TypedSymbol } from "./TypedSymbol";

export class ClassSymbol extends SymbolWithScope implements TypedSymbol {
  type: Type = { name: "class" };
  docString: string | undefined;
  arguments: ParameterSymbol[] = [];

  constructor(name: string, range: Range, blockRange: Range, scope: BaseScope) {
    super(name, range, blockRange, scope);

    const cast = new MethodSymbol("cast", range, blockRange, this);
    cast.arguments.push(
      new ParameterSymbol("target", cast, range, "POSITIONAL_OR_KEYWORD")
    );
    cast.retType = this;

    const alloc = new MethodSymbol("alloc", range, blockRange, this);
    alloc.retType = this;

    this.insert(cast);
    this.insert(alloc);
  }

  /**
   * 메소드 심볼 얻어오기.
   */
  public getMethod() {
    // TODO
  }

  public static isClassSymbol(arg: any): arg is ClassSymbol {
    return arg instanceof ClassSymbol;
  }
}
