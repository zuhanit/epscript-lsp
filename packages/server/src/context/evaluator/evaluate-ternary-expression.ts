import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateTernaryExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const condition = node.childForFieldName("condition");
  const consequence = node.childForFieldName("consequence");
  const alternative = node.childForFieldName("alternative");

  if (!condition || !consequence || !alternative) {
    return undefined;
  }

  const conditionalValue = evaluateNode({
    node: condition,
    ...rest,
  });

  // 조건이 참일 경우 첫번째 노드 표현식을 평가한 값을 반환
  if (conditionalValue) {
    return evaluateNode({ node: consequence, ...rest });
  }

  // 거짓일 경우 두번째 값을 반환
  return evaluateNode({ node: alternative, ...rest });
}
