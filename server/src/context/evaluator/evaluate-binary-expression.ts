import {
  BinaryExpressionContext,
  epScriptParser,
} from "../../grammar/lib/epScriptParser";
import { VariableSymbol } from "../symbolTable/VariableSymbol";
import { evaluateNode } from "./evaluator";
import { EvaluatorOption } from "./evaluator-options";
import { Literal } from "./literal";

export function evaluateBinaryExpression({
  node,
  ...rest
}: EvaluatorOption<BinaryExpressionContext>) {
  const left = evaluateNode({ node: node.singleExpression(0), ...rest });
  const right = evaluateNode({ node: node.singleExpression(1), ...rest });

  switch (node.binaryOperator().start.type) {
    case epScriptParser.Assign:
      if (left) {
        setValue(left, right);
        return right;
      }
      break;
    default:
      return left;
  }

  return undefined;
}

function setValue(symbol: Literal, value: Literal): void {
  if (symbol instanceof VariableSymbol) symbol.value = value;
}
