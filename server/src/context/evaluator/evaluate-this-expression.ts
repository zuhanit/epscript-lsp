import { ThisExpressionContext } from "../../grammar/src/grammar/lib/epScriptParser";
import { ClassSymbol } from "../symbolTable/ClassSymbol";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateThisExpression({
  currentScope,
}: EvaluatorOption<ThisExpressionContext>) {
  return currentScope as ClassSymbol;
}
