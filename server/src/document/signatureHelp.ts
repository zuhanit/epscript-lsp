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
  ArgumentListContext,
  SingleExpressionContext,
} from "../grammar/src/grammar/lib/epScriptParser";
import {
  getParameterInformation,
  getActiveParameterNumber,
} from "./utils/paramUtil";
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
