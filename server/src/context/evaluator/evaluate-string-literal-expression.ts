import { StringLiteralExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { EvaluatorOption } from './evaluator-options';

export function evaluateStringLiteralExpression({node, ...rest}: EvaluatorOption<StringLiteralExpressionContext>) {
	return node.text;
}