import { AnonymousFunctionExpressionContext } from "../../grammar/lib/epScriptParser";
import { getRangeByContext } from "../../util/range";
import { FunctionSymbol } from "../symbolTable/FunctionSymbol";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateAnonymousFunctionExpression({
  node,
  symbolTable,
}: EvaluatorOption<AnonymousFunctionExpressionContext>) {
  return new FunctionSymbol(
    "",
    getRangeByContext(node),
    getRangeByContext(node),
    symbolTable.globalScope
  );
}
