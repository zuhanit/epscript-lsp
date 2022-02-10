import { ThisExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { ClassSymbol } from '../symbolTable/ClassSymbol';
import { EvaluatorOption } from './evaluator-options';

export function evaluateThisExpression({node, ...rest}: EvaluatorOption<ThisExpressionContext>) {
	return rest.currentScope as ClassSymbol;
}