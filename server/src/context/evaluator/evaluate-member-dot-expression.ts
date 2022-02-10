import { pushDiagnostic } from '../../diagnostic/DiagnosticManager';
import { MemberDotExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { keys } from '../../i18n/LanguageManager';
import { literalToType } from '../../util/literalUtils';
import { BaseScope } from '../symbolTable/BaseScope';
import { MemberSymbol } from '../symbolTable/MemberSymbol';
import { VariableSymbol } from '../symbolTable/VariableSymbol';
import { evaluateNode } from './evaluator';
import { EvaluatorOption } from './evaluator-options';

export function evaluateMemberDotExpression({node, ...rest}: EvaluatorOption<MemberDotExpressionContext>) {
	let expressionResult = evaluateNode({node: node.singleExpression(), ...rest});
	while (expressionResult instanceof VariableSymbol || expressionResult instanceof MemberSymbol) expressionResult = expressionResult.value;
	const match = expressionResult instanceof BaseScope
		? expressionResult.getSymbolByName(node.identifier().text)
		: undefined;
	
	if (match === undefined) {
		const message = rest.languageManager.getDiagnosticsKey(keys['diagnostics.property']) +
						" '" +
						node.identifier().text +
						"' " +
						rest.languageManager.getDiagnosticsKey(keys['diagnostics.doesNotExist']) +
						" '" +
						literalToType(expressionResult) +
						"'.";

		pushDiagnostic(message, rest.diagnostics, node.identifier().Identifier().symbol);
	}

	return match;
}