import { ParanthesizedExpressionContext } from "../../grammar/src/grammar/lib/epScriptParser";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateParanthesizedExpression({
  node,
  ...rest
}: EvaluatorOption<ParanthesizedExpressionContext>) {
  return evaluateNode({ node: node.expressionSequence(), ...rest });
}
