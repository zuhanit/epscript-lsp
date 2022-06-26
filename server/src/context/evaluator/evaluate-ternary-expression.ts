import { TernaryExpressionContext } from "../../grammar/src/grammar/lib/epScriptParser";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateTernaryExpression({
  node,
  ...rest
}: EvaluatorOption<TernaryExpressionContext>) {
  const conditionalValue = evaluateNode({
    node: node.singleExpression(0),
    ...rest,
  });

  // 조건이 참일 경우 첫번째 노드 표현식을 평가한 값을 반환
  if (conditionalValue) {
    return evaluateNode({ node: node.singleExpression(1), ...rest });
  }

  // 거짓일 경우 두번째 값을 반환
  return evaluateNode({ node: node.singleExpression(2), ...rest });
}
