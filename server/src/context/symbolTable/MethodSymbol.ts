import { FunctionSymbol } from './FunctionSymbol';
import { IScope } from './IScope';
import { Type } from './Type';

export class MethodSymbol extends FunctionSymbol {
	type: Type = {name: 'method'};

	constructor(
		name: string,
		scope: IScope,
	) {
		super(name,scope);
	}
}