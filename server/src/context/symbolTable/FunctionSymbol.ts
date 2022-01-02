import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { IScope } from './IScope';
import { SymbolWithScope } from './SymbolWithScope';
import { Type } from './Type';
import { TypedSymbol } from './TypedSymbol';

export class FunctionSymbol extends SymbolWithScope implements TypedSymbol {
	type: Type = {name: 'function'};
	retType: Type = {name: 'void'};
	docString = '';

	constructor(
		name: string,
		scope: IScope,
	) {
		super(name, scope);
	}
}