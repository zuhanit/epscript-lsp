import { ParserRuleContext } from 'antlr4ts';
import { Position, Range } from 'vscode-languageserver';
import { Literal } from '../evaluator/literal';
import { IScope } from './IScope';
import { ISymbol } from './ISymbol';
import { Type } from './Type';

export abstract class BaseSymbol implements ISymbol {
	public name: string;
	public scope: IScope;
	public type: Literal;
	public defNode: ParserRuleContext | undefined;
	public range: Range;

	constructor(
		name: string,
		scope: IScope,
		range: Range,
		defNode?: ParserRuleContext,
	) {
		this.name = name;
		this.scope = scope;
		this.range = range;
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
		const path = this.scope.getEnclosingPathToRoot();
		return `${path.reverse().map(x => x.name).join('.')}.${this.name}`;
	}
}