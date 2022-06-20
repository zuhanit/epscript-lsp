import { pushDiagnostic } from '../../diagnostic/DiagnosticManager';
import { CallExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { keys } from '../../i18n/LanguageManager';
import { ClassSymbol } from '../symbolTable/ClassSymbol';
import { FunctionSymbol } from '../symbolTable/FunctionSymbol';
import { MethodSymbol } from '../symbolTable/MethodSymbol';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateCallExpression({node, ...rest}: EvaluatorOption<CallExpressionContext>) {
	const evaluated = evaluateNode({node: node.singleExpression(), ...rest});

	// 심볼이 존재하는지 확인.
	if (evaluated) {
		// 함수 심볼의 경우 리턴 타입을 반환
		if (evaluated instanceof FunctionSymbol || evaluated instanceof MethodSymbol) {
			let parameterLength = evaluated.arguments.length;
			const argumentList = node.arguments().argumentList();

			let argsIndex: number | undefined = undefined;
			let argumentLength = argumentList
				? node.arguments().argumentList()!.argument().length
				: 0;

			if (argumentList) {
				const args = argumentList.argument();
				evaluated.arguments.forEach((arg, index) => {
					if (arg.name.includes('=') && !args[index]) argumentLength += 1;
					if (arg.name.startsWith('**')) {
						argsIndex = index;
						parameterLength -= 1;
					}
					if (arg.name.startsWith('*') && !arg.name.startsWith('**')) {
						parameterLength -= 1;
						argsIndex = index;
					}
				});
			}

			if (parameterLength !== argumentLength) {
				if (argsIndex && argumentLength <= argsIndex) {
					const message = rest.languageManager.getDiagnosticsKey(keys['diagnostics.argumentLengthNotMatch']) +
									". " +
									rest.languageManager.getDiagnosticsKey(keys['diagnostics.expected']) +
									" " +
									parameterLength +
									" arguments, " +
									rest.languageManager.getDiagnosticsKey(keys['diagnostics.butGot']) +
									" " +
									argumentLength +
									".";
					pushDiagnostic(message, rest.diagnostics, node.arguments());
				}
			}

			return evaluated.retType;
		} 
		// 클래스 심볼의 경우 클래스를 반환
		else if (evaluated instanceof ClassSymbol) {
			return evaluated;
		}
	}
}