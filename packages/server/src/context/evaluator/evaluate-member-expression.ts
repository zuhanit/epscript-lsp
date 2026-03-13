import { ClassSymbol } from "../symbolTable/ClassSymbol";
import { EvaluatorOption } from "./evaluator-options";

export function evaluateMemberExpression({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  node,
  ...rest
}: EvaluatorOption) {
  return rest.symbolTable.predefinedScope.getSymbolByName(
    "EUDVariable"
  ) as ClassSymbol; // TODO: 더 똑똑하게...
}
