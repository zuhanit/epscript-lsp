import { ParameterInformation } from "vscode-languageserver";
import { SymbolInfo } from "../../context/facade";
import type { Node } from "web-tree-sitter";

/**
 * Get zero-based active parameter number of current Expression.
 *
 * @param expr
 * @param symbolInfo
 * @returns Zero-based active parameter number.
 */
export const getActiveParameterNumber = (
  expr: Node,
  symbolInfo: SymbolInfo
) => {
  if (expr.type === "call_expression") {
    const argumentsNode = expr.childForFieldName("arguments");
    if (argumentsNode) {
      const args = argumentsNode.namedChildren;
      if (args.length > 0 && hasAssignOperator(args)) {
        const currentArgument = args[args.length - 1];
        if (isAssignOperator(currentArgument)) {
          const leftSide = currentArgument.childForFieldName("left");
          if (leftSide && symbolInfo.args) {
            return symbolInfo.args.findIndex(
              (arg) => arg.name == leftSide.text
            );
          }
        }
      } else {
        // Cannot use positional arguments after Keyword Arguments
        // Count commas to determine active parameter
        const commaCount = argumentsNode.children.filter(
          (c) => c.type === ","
        ).length;
        return commaCount;
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
const hasAssignOperator = (args: Node[]) => {
  return args.some((arg) => {
    return isAssignOperator(arg);
  });
};
const isAssignOperator = (expr: Node): boolean => {
  if (
    expr.type === "binary_expression" &&
    expr.childForFieldName("operator")?.text === "="
  ) {
    return true;
  } else {
    return false;
  }
};
