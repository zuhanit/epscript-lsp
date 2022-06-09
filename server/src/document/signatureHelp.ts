import {
  ParameterInformation,
  SignatureHelp,
  SignatureHelpParams,
  SignatureInformation,
} from "vscode-languageserver";
import { evaluateNode } from "../context/evaluator/evaluator";
import { Literal } from "../context/evaluator/literal";
import { getSymbolInfo, SymbolInfo } from "../context/facade";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import {
  ArgumentContext,
  ArgumentListContext,
  BinaryExpressionContext,
  CallExpressionContext,
  SingleExpressionContext,
} from "../grammar/src/grammar/lib/epScriptParser";
import { ProviderOption } from "./provider-option";

export function provideSingatureHelp(
  { contextPackage, name, params }: ProviderOption<SignatureHelpParams>,
  evaluated: Literal,
  singleExpression: SingleExpressionContext
): SignatureHelp {
  const signatureItem: SignatureHelp = {
    signatures: [],
    activeParameter: 0,
    activeSignature: 0,
  };

  if (evaluated instanceof BaseSymbol || evaluated instanceof BaseScope) {
    const symbolInfo = getSymbolInfo(evaluated);
    const args: ParameterInformation[] = getParameterInformation(symbolInfo);

    const signature: SignatureInformation = {
      label: symbolInfo.name + "(" + args.map((x) => x.label).join(", ") + ")",
      parameters: args,
    };

    signatureItem.signatures.push(signature);
    signatureItem.activeParameter = getActiveParameterNumber(
      singleExpression,
      symbolInfo
    );
  }
  return signatureItem;
}

const getActiveParameterNumber = (
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
        return exprArgumentList.argument().length - 1;
      }
    }
  }

  return -1;
};

const getParameterInformation = (
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
