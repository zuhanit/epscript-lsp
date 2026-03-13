import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateParanthesizedExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const inner = node.namedChildren[0];
  if (!inner) return undefined;
  return evaluateNode({ node: inner, ...rest });
}
