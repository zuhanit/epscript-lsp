import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { Range } from 'vscode-languageserver';
import { Literal } from '../evaluator/literal';
import { BaseScope } from './BaseScope';
import { IScope } from './IScope';
import { ISymbol } from './ISymbol';
import { SymbolWithScope } from './SymbolWithScope';
import { Type } from './Type';
import { TypedSymbol } from './TypedSymbol';

export class FunctionSymbol extends SymbolWithScope implements TypedSymbol {
	type: Literal = 'FunctionSymbol';
	retType: Literal;
	docString = '';
	arguments: ISymbol[] = [];
	constructor(
		name: string,
		range: Range,
		blockRange: Range,
		scope: BaseScope,
	) {
		super(name, range, blockRange, scope);
	}
	
	public static isFunctionSymbol(arg: any): arg is FunctionSymbol {
		return arg instanceof FunctionSymbol;
	}
}