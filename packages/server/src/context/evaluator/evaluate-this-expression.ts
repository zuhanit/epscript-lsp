import { ThisExpressionContext } from "../../grammar/lib/epScriptParser";
import { ClassSymbol } from "../symbolTable/ClassSymbol";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateThisExpression({
  currentScope,
}: EvaluatorOption<ThisExpressionContext>) {
  if (!currentScope.parent || !ClassSymbol.isClassSymbol(currentScope.parent)) {
    return undefined;
  }
  return currentScope.parent as ClassSymbol;
}
