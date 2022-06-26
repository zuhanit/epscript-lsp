import { TextDocumentPositionParams } from "vscode-languageserver";
import { ContextPackage } from "../context/IContextPackage";

export interface ProviderOption<T extends TextDocumentPositionParams> {
  params: T;
  contextPackage: ContextPackage;
  name: string;
}
