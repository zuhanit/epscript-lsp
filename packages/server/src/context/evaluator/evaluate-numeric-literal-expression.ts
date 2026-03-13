import { EvaluatorOption } from "./evaluator-options";

export function evaluateNumericLiteralExpression({
  node,
}: EvaluatorOption) {
  return Number(node.text);
}
