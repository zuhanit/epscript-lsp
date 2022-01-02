import { ParserRuleContext } from 'antlr4ts';
import { BaseSymbol } from './BaseSymbol';
import { IScope } from './IScope';
import { Type } from './Type';
import { TypedSymbol } from './TypedSymbol';

export type Modifier = 'var' | 'const';
export class VariableSymbol extends BaseSymbol implements TypedSymbol {
	type: Type = {name: 'variable'};
	modifier: Modifier = 'var';

	constructor(
		name: string,
		scope: IScope,
		defNode?: ParserRuleContext,
	) {
		super(name, scope, defNode);
	}
}