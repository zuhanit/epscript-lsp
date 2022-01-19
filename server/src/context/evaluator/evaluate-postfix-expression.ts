import { epScriptParser, IdentifierContext, PostfixExpressionContext, SingleExpressionContext } from '../../grammar/epScriptParser';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluatePostfixExpression({node, ...rest}: EvaluatorOption<PostfixExpressionContext>) {
	switch (node.postfixOperator().start.type) {
		case epScriptParser.PlusPlus:
			if (!(SingleExpressionContext instanceof IdentifierContext)) {
				throw new Error('Blahblah');
			}

			return evaluateNode({node: node.singleExpression(), ...rest}); // TODO: 실제 평가한 값을 반환하도록

		case epScriptParser.MinusMinus:
			if (!(SingleExpressionContext instanceof IdentifierContext)) {
				throw new Error('Blahblah');
			}

			return evaluateNode({node: node.singleExpression(), ...rest});
	}

	return evaluateNode({node: node.singleExpression(), ...rest});
}