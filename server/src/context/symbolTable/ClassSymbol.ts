import { Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';
import { IScope } from './IScope';
import { SymbolWithScope } from './SymbolWithScope';
import { Type } from './Type';
import { TypedSymbol } from './TypedSymbol';

export class ClassSymbol extends SymbolWithScope implements TypedSymbol{
	type: Type = {name: 'class'};
	docString = '';

	constructor(
		name: string,
		range: Range,
		scope: BaseScope,
	) {
		super(name, range, scope);
	}

	/**
	 * 메소드 심볼 얻어오기.
	 */
	public getMethod() {
		// TODO
	}
}