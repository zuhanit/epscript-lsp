import { StringLiteralExpressionContext } from '../../grammar/epScriptParser';
import { EvaluatorOption } from './evaluator-options';

export function evaluateStringLiteralExpression({node, ...rest}: EvaluatorOption<StringLiteralExpressionContext>) {
	return node.text;
}