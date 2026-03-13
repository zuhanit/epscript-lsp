import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluatePostfixExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const argument = node.childForFieldName("argument");
  if (!argument) return undefined;

  const operator = node.childForFieldName("operator")?.text;

  switch (operator) {
    case "++":
      return evaluateNode({ node: argument, ...rest }); // TODO: 실제 평가한 값을 반환하도록

    case "--":
      return evaluateNode({ node: argument, ...rest });
  }

  return evaluateNode({ node: argument, ...rest });
}
