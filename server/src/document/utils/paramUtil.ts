import { ParameterInformation } from "vscode-languageserver";
import { SymbolInfo } from "../../context/facade";
import {
  ArgumentContext,
  BinaryExpressionContext,
  CallExpressionContext,
  SingleExpressionContext,
} from "../../grammar/lib/epScriptParser";

/**
 * Get zero-based active parameter number of current Expression.
 *
 * @param expr
 * @param symbolInfo
 * @returns Zero-based active parameter number.
 */
export const getActiveParameterNumber = (
  expr: SingleExpressionContext,
  symbolInfo: SymbolInfo
) => {
  if (expr instanceof CallExpressionContext) {
    const exprArgumentList = expr.arguments().argumentList();
    if (exprArgumentList) {
      const args = exprArgumentList.argument();
      if (hasAssignOperator(args)) {
        const currentArgument = args[args.length - 1].singleExpression();
        if (isAssignOperator(currentArgument)) {
          if (symbolInfo.args) {
            return symbolInfo.args.findIndex(
              (arg) => arg.name == currentArgument.singleExpression()[0].text
            );
          }
        }
      } else {
        // Cannot use positional arguments after Keyword Arguments
        const commas = exprArgumentList.Comma();
        return commas.length;
      }
    } else {
      // ex: A()
      return 0;
    }
  }

  return -1;
};
export const getParameterInformation = (
  symbolInfo: SymbolInfo
): ParameterInformation[] => {
  if (symbolInfo.args) {
    return symbolInfo.args.map((arg) => ({
      label: arg.detail,
    }));
  }

  return [];
};
const hasAssignOperator = (args: ArgumentContext[]) => {
  return args.some((arg) => {
    const singleExpression = arg.singleExpression();
    return isAssignOperator(singleExpression);
  });
};
const isAssignOperator = (
  expr: SingleExpressionContext
): expr is BinaryExpressionContext => {
  if (
    expr instanceof BinaryExpressionContext &&
    expr.binaryOperator().Assign()
  ) {
    return true;
  } else {
    return false;
  }
};
