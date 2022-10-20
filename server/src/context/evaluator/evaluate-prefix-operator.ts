import { PrefixExpressionContext } from "../../grammar/lib/epScriptParser";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluatePrefixExpression({
  node,
  ...rest
}: EvaluatorOption<PrefixExpressionContext>) {
  const operandValue = evaluateNode({ node: node.singleExpression(), ...rest });
  // switch (node.prefixOperator().start.type) {
  // TODO
  // }
  return operandValue;
}
