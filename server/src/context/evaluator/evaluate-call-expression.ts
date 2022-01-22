import { CallExpressionContext } from '../../grammar/epScriptParser';
import { BaseScope } from '../symbolTable/BaseScope';
import { BaseSymbol } from '../symbolTable/BaseSymbol';
import { ClassSymbol } from '../symbolTable/ClassSymbol';
import { FunctionSymbol } from '../symbolTable/FunctionSymbol';
import { ISymbol } from '../symbolTable/ISymbol';
import { MethodSymbol } from '../symbolTable/MethodSymbol';
import { SymbolWithScope } from '../symbolTable/SymbolWithScope';
import { VariableSymbol } from '../symbolTable/VariableSymbol';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateCallExpression({node, ...rest}: EvaluatorOption<CallExpressionContext>) {
	const evaluated = evaluateNode({node: node.singleExpression(), ...rest});

	// 심볼이 존재하는지 확인.
	if (evaluated) {
		// 함수 심볼의 경우 리턴 타입을 반환
		if (evaluated instanceof FunctionSymbol || evaluated instanceof MethodSymbol) {
			return evaluated.retType;
		} 
		// 클래스 심볼의 경우 클래스를 반환
		else if (evaluated instanceof ClassSymbol) {
			return evaluated;
		}
	}
}