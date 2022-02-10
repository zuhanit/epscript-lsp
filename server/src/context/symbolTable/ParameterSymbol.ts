import { ParserRuleContext } from 'antlr4ts';
import { Position, Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';
import { IScope } from './IScope';
import { VariableSymbol } from './VariableSymbol';

/**
 * 매개인자 심볼.
 * 
 */
export class ParameterSymbol extends VariableSymbol {
	docString = '';

	constructor(
		name: string,
		scope: BaseScope,
		Range: Range,
		defNode?: ParserRuleContext,
	) {
		super(name, scope, Range, defNode);
	}

	public static isParameterSymbol(arg: any): arg is ParameterSymbol {
		return arg instanceof ParameterSymbol;
	}
}