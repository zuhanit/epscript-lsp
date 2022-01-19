import { IdentifierExpressionContext } from '../../grammar/epScriptParser';
import { EvaluatorOption } from './evaluator-options';

export function evaluateIdentifierExpression({node, ...rest}: EvaluatorOption<IdentifierExpressionContext>) {
	return rest.currentScope.resolve(node.text);
}