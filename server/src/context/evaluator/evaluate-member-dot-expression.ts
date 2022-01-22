import { type } from 'os';
import { MemberDotExpressionContext } from '../../grammar/epScriptParser';
import { BaseScope } from '../symbolTable/BaseScope';
import { MemberSymbol } from '../symbolTable/MemberSymbol';
import { VariableSymbol } from '../symbolTable/VariableSymbol';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateMemberDotExpression({node, ...rest}: EvaluatorOption<MemberDotExpressionContext>) {
	let expressionResult = evaluateNode({node: node.singleExpression(), ...rest});
	if (expressionResult instanceof VariableSymbol || expressionResult instanceof MemberSymbol) expressionResult = expressionResult.value;
	const match = expressionResult instanceof BaseScope
		? expressionResult.getSymbolByName(node.identifier().text)
		: undefined;

	return match;
}