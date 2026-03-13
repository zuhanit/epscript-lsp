import { pushDiagnostic } from "../../diagnostic/DiagnosticManager";
import { keys } from "../../i18n/LanguageManager";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateIdentifierExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const resolved = rest.currentScope.resolve(node.text);
  if (resolved === undefined)
    pushDiagnostic(
      rest.languageManager.getDiagnosticsKey(keys["diagnostics.notExist"]) +
        ` "${node.text}"`,
      rest.diagnostics,
      node
    );
  return resolved;
}
