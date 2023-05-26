import { ParserRuleContext } from "antlr4ts";
import { Range } from "vscode-languageserver";
import { Literal } from "../evaluator/literal";
import { BaseScope } from "./BaseScope";
import { ISymbol } from "./ISymbol";
import { v4 } from "uuid";

export abstract class BaseSymbol implements ISymbol {
  public name: string;
  public scope?: BaseScope;
  public type: Literal;
  public defNode: ParserRuleContext | undefined;
  public range: Range;
  public uniqueId: string = v4();

  constructor(
    name: string,
    range: Range,
    scope?: BaseScope,
    defNode?: ParserRuleContext
  ) {
    this.name = name;
    this.range = range;
    this.scope = scope;
    this.defNode = defNode;
  }

  /**
   * 평가된 이름 얻기.
   *
   * 루트 스코프까지의 체이닝 이름을 얻어온 후 변수 이름을 연결한다.
   *
   * 일반 `SymbolTable`에서 사용할 경우 predefined.global까지 있음에 주의.
   * @returns 평가된 이름
   */
  public getFullyQualifiedName(): string {
    const scope = this.scope;
    const path = scope ? scope.getEnclosingPathToRoot() : [];
    return `${path
      .reverse()
      .map((x) => x.name)
      .join(".")}.${this.name}`;
  }
}
