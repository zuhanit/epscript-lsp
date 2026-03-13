import { toRange } from "../../parser";
import { FunctionSymbol } from "../symbolTable/FunctionSymbol";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateAnonymousFunctionExpression({
  node,
  symbolTable,
}: EvaluatorOption) {
  return new FunctionSymbol(
    "",
    toRange(node),
    toRange(node),
    symbolTable.globalScope
  );
}
