import { CallExpressionContext } from '../../grammar/epScriptParser';
import { BaseScope } from '../symbolTable/BaseScope';
import { BaseSymbol } from '../symbolTable/BaseSymbol';
import { ClassSymbol } from '../symbolTable/ClassSymbol';
import { FunctionSymbol } from '../symbolTable/FunctionSymbol';
import { ISymbol } from '../symbolTable/ISymbol';
import { SymbolWithScope } from '../symbolTable/SymbolWithScope';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateCallExpression({node, ...rest}: EvaluatorOption<CallExpressionContext>) {
	const evaluated = evaluateNode({node: node.singleExpression(), ...rest});
	let symbol: ISymbol | undefined;

	// 노드가 존재하는지 확인.
	if (evaluated) {
		if (typeof evaluated === 'function' || evaluated instanceof ClassSymbol)
		// 노드가 존재할 경우, 현재 스코프에서 심볼을 찾아옴.
		symbol = rest.currentScope.resolve(evaluated.name);
	}

	// 심볼이 존재하는지 확인.
	if (symbol) {
		// 함수 심볼의 경우 리턴 타입을 반환
		if (symbol instanceof FunctionSymbol && (symbol.retType instanceof BaseSymbol || symbol.retType instanceof BaseScope)) {
			return symbol.retType;
		} 
		// 클래스 심볼의 경우 클래스를 반환
		else if (symbol instanceof ClassSymbol) {
			return symbol;
		}
	}
}