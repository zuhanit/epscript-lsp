import { type } from 'os';
import { MemberDotExpressionContext } from '../../grammar/epScriptParser';
import { BaseScope } from '../symbolTable/BaseScope';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateMemberDotExpression({node, ...rest}: EvaluatorOption<MemberDotExpressionContext>) {
	const expressionResult = evaluateNode({node: node.singleExpression(), ...rest});
	
	const match = expressionResult instanceof BaseScope
		? expressionResult.getSymbolByName(node.identifier().text)
		: undefined;

	return match;
}