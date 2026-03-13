import { ClassSymbol } from "../symbolTable/ClassSymbol";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateThisExpression({
  currentScope,
}: EvaluatorOption) {
  if (!currentScope.parent || !ClassSymbol.isClassSymbol(currentScope.parent)) {
    return undefined;
  }
  return currentScope.parent as ClassSymbol;
}
