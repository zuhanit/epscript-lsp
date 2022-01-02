import { BaseScope } from './BaseScope';
import { IScope } from './IScope';
import { ISymbol } from './ISymbol';

/**
 * 심볼이자 동시에 클래스인 스코프.
 * 
 * 함수나 클래스같은 경우 심볼이자 스코프를 포함하므로 이를 적용하기 위해
 * `SymbolWithScope` 추상 클래스를 이용해 작성한다.
 */
export abstract class SymbolWithScope extends BaseScope implements ISymbol, IScope {
	scope: IScope;

	constructor(
		name: string,
		scope: IScope,
	) {
		super(name, scope);
		this.scope = scope;
	}
}