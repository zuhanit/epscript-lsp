import { CommonTokenStream } from 'antlr4ts';
import { TextDocumentPositionParams } from 'vscode-languageserver';
import { ContextPackage } from '../context/IContextPackage';
import { BaseScope } from '../context/symbolTable/BaseScope';

export interface ProviderOption<T extends TextDocumentPositionParams> {
	params: T;
	contextPackage: ContextPackage;
	name: string;
}