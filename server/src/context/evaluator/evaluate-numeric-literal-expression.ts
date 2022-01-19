import { NumericLiteralExpressionContext } from '../../grammar/epScriptParser';
import { EvaluatorOption } from './evaluator-options';

export function evaluateNumericLiteralExpression({node, ...rest}: EvaluatorOption<NumericLiteralExpressionContext>) {
	return Number(node.numericLiteral().text);
}