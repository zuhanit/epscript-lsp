import { BinaryExpressionContext } from '../../grammar/epScriptParser';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateBinaryExpression({node, ...rest}: EvaluatorOption<BinaryExpressionContext>) {
	return evaluateNode({node: node, ...rest});
}