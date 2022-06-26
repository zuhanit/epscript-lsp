import { StringLiteralExpressionContext } from "../../grammar/src/grammar/lib/epScriptParser";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateStringLiteralExpression({
  node,
}: EvaluatorOption<StringLiteralExpressionContext>) {
  return node.text;
}
