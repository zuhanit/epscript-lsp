import { MemberExpressionContext } from '../../grammar/epScriptParser';
import { ClassSymbol } from '../symbolTable/ClassSymbol';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateMemberExpression({node, ...rest}: EvaluatorOption<MemberExpressionContext>) {
	const arr = evaluateNode({node: node.singleExpression(), ...rest});
	return rest.symbolTable.predefinedScope.getSymbolByName('EUDVariable') as ClassSymbol; // TODO: 더 똑똑하게...
}