import { Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';
import { FunctionSymbol } from './FunctionSymbol';
import { IScope } from './IScope';
import { Type } from './Type';

export class MethodSymbol extends FunctionSymbol {
	type: Type = {name: 'method'};

	constructor(
		name: string,
		range: Range,
		scope: BaseScope,
	) {
		super(name, range, scope);
	}
}