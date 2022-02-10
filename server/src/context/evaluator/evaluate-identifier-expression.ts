import { pushDiagnostic } from '../../diagnostic/DiagnosticManager';
import { IdentifierExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { keys } from '../../i18n/LanguageManager';
import { EvaluatorOption } from './evaluator-options';

export function evaluateIdentifierExpression({node, ...rest}: EvaluatorOption<IdentifierExpressionContext>) {
	const resolved = rest.currentScope.resolve(node.text);
	if (resolved === undefined) pushDiagnostic(rest.languageManager.getDiagnosticsKey(keys['diagnostics.notExist']) + ` "${node.text}"`, rest.diagnostics, node.identifier());
	return resolved;
}