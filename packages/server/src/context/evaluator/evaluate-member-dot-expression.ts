import { pushDiagnostic } from "../../diagnostic/DiagnosticManager";
import { keys } from "../../i18n/LanguageManager";
import { literalToType } from "../../util/literalUtils";
import { BaseScope } from "../symbolTable/BaseScope";
import { MemberSymbol } from "../symbolTable/MemberSymbol";
import { VariableSymbol } from "../symbolTable/VariableSymbol";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateMemberDotExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const objectNode = node.childForFieldName("object");
  if (!objectNode) return undefined;

  let expressionResult = evaluateNode({
    node: objectNode,
    ...rest,
  });
  while (
    expressionResult instanceof VariableSymbol ||
    expressionResult instanceof MemberSymbol
  )
    expressionResult = expressionResult.value;

  const propertyNode = node.childForFieldName("property");
  const propertyName = propertyNode?.text ?? "";

  const match =
    expressionResult instanceof BaseScope
      ? expressionResult.getSymbolByName(propertyName)
      : undefined;

  if (match === undefined && propertyNode) {
    const message =
      rest.languageManager.getDiagnosticsKey(keys["diagnostics.property"]) +
      " '" +
      propertyName +
      "' " +
      rest.languageManager.getDiagnosticsKey(keys["diagnostics.doesNotExist"]) +
      " '" +
      literalToType(expressionResult) +
      "'.";

    pushDiagnostic(message, rest.diagnostics, propertyNode);
  }

  return match;
}
