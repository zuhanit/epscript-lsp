import {
  MarkupContent,
  ParameterInformation,
  SignatureHelp,
  SignatureInformation,
} from "vscode-languageserver";
import { Literal } from "../context/evaluator/literal";
import { getSymbolInfo } from "../context/facade";
import { BaseScope } from "../context/symbolTable/BaseScope";
import { BaseSymbol } from "../context/symbolTable/BaseSymbol";
import type { Node } from "web-tree-sitter";
import {
  getParameterInformation,
  getActiveParameterNumber,
} from "./utils/paramUtil";

export function provideSingatureHelp(
  evaluated: Literal,
  node: Node
): SignatureHelp {
  const signatureItem: SignatureHelp = {
    signatures: [],
    activeParameter: 0,
    activeSignature: 0,
  };
  if (evaluated instanceof BaseSymbol || evaluated instanceof BaseScope) {
    const symbolInfo = getSymbolInfo(evaluated);
    const args: ParameterInformation[] = getParameterInformation(symbolInfo);
    const documentation: MarkupContent | undefined = symbolInfo.documentation
      ? {
          kind: "markdown",
          value: symbolInfo.documentation,
        }
      : undefined;
    const signature: SignatureInformation = {
      label: symbolInfo.name + "(" + args.map((x) => x.label).join(", ") + ")",
      documentation: documentation,
      parameters: args,
    };

    signatureItem.signatures.push(signature);
    signatureItem.activeParameter = getActiveParameterNumber(
      node,
      symbolInfo
    );
  }
  return signatureItem;
}
