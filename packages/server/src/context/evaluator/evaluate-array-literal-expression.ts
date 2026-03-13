import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";
import { Literal } from "./literal";

export function evaluateArrayLiteralExpression({
  node,
  ...rest
}: EvaluatorOption): Literal {
  const arr: Literal[] = [];

  for (const child of node.namedChildren) {
    arr.push(evaluateNode({ node: child, ...rest }));
  }

  return arr;
}
