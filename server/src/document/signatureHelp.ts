import {
  ParameterInformation,
  SignatureHelp,
  SignatureHelpParams,
  SignatureInformation,
} from "vscode-languageserver";
import { evaluateNode } from "../context/evaluator/evaluator";
import { Literal } from "../context/evaluator/literal";
import { getSymbolInfo } from "../context/facade";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import {
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
    const args: ParameterInformation[] = [];

    if (symbolInfo.args) {
      symbolInfo.args.forEach((arg) => {
        args.push({
          label: arg.detail,
        });
      });
    }

    const signature: SignatureInformation = {
      label: symbolInfo.name + "(" + args.map((x) => x.label).join(", ") + ")",
      parameters: args,
    };

    signatureItem.signatures.push(signature);
  }

  if (singleExpression instanceof CallExpressionContext) {
    const exprArgumentList = singleExpression.arguments().argumentList();
    if (exprArgumentList) {
      signatureItem.activeParameter = exprArgumentList.argument().length - 1;
    }
  }

  return signatureItem;
}
