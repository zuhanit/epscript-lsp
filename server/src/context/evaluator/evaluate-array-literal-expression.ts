import { ArrayLiteralExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';
import { Literal } from './literal';

export function evaluateArrayLiteralExpression({node, ...rest}: EvaluatorOption<ArrayLiteralExpressionContext>): Literal {
	const arr: Literal[] = [];

	node.arrayLiteral().elementList()?.arrayElement().forEach(element => {
		arr.push(evaluateNode({node: element.singleExpression(), ...rest}));
	});

	return arr;
}