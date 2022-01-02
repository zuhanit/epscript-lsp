import { IScope } from './IScope';
import { SymbolWithScope } from './SymbolWithScope';
import { Type } from './Type';

export class ClassSymbol extends SymbolWithScope {
	type: Type = {name: 'class'};
	docString = '';

	constructor(
		name: string,
		scope: IScope,
	) {
		super(name, scope);
	}

	/**
	 * 메소드 심볼 얻어오기.
	 */
	public getMethod() {
		// TODO
	}
}