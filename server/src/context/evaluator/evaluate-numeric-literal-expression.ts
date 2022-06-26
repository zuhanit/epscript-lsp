import { NumericLiteralExpressionContext } from "../../grammar/src/grammar/lib/epScriptParser";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateNumericLiteralExpression({
  node,
}: EvaluatorOption<NumericLiteralExpressionContext>) {
  return Number(node.numericLiteral().text);
}
