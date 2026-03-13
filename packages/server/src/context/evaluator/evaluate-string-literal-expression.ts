import { EvaluatorOption } from "./evaluator-options";

export function evaluateStringLiteralExpression({
  node,
}: EvaluatorOption) {
  return node.text;
}
