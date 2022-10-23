import { TernaryExpressionContext } from "../../grammar/lib/epScriptParser";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateTernaryExpression({
  node,
  ...rest
}: EvaluatorOption<TernaryExpressionContext>) {
  const singleExpressions = node.singleExpression();
  if (singleExpressions.length !== 3) {
    return undefined;
  }

  const conditionalValue = evaluateNode({
    node: singleExpressions[0],
    ...rest,
  });

  // 조건이 참일 경우 첫번째 노드 표현식을 평가한 값을 반환
  if (conditionalValue) {
    return evaluateNode({ node: singleExpressions[1], ...rest });
  }

  // 거짓일 경우 두번째 값을 반환
  return evaluateNode({ node: singleExpressions[2], ...rest });
}
