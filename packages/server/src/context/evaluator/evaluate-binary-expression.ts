import { VariableSymbol } from "../symbolTable/VariableSymbol";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";
import { Literal } from "./literal";

export function evaluateBinaryExpression({
  node,
  ...rest
}: EvaluatorOption) {
  const leftNode = node.childForFieldName("left");
  const rightNode = node.childForFieldName("right");
  if (!leftNode || !rightNode) return undefined;

  const left = evaluateNode({ node: leftNode, ...rest });
  const right = evaluateNode({ node: rightNode, ...rest });

  const operator = node.childForFieldName("operator")?.text;

  switch (operator) {
    case "=":
      if (left) {
        if (left !== right) {
          setValue(left, right);
        }
        return right;
      }
      break;
    case "+":
      return left + right;
    default:
      return left;
  }

  return undefined;
}

function setValue(symbol: Literal, value: Literal): void {
  if (symbol instanceof VariableSymbol) symbol.value = value;
}
