import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluatePrefixExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const argument = node.childForFieldName("argument");
  if (!argument) return undefined;
  const operandValue = evaluateNode({ node: argument, ...rest });
  // switch (operator) {
  // TODO
  // }
  return operandValue;
}
