import { SignatureHelp, SignatureHelpParams } from 'vscode-languageserver';
import { SingleExpressionContext } from '../grammar/src/grammar/lib/epScriptParser';
import { ProviderOption } from './provider-option';

export function provideSingatureHelp({contextPackage, name, params}: ProviderOption<SignatureHelpParams>, singleExpressions: SingleExpressionContext[]): SignatureHelp {
	console.log(singleExpressions);

	return {
		signatures: [],
		activeParameter: 0,
		activeSignature: 0,
	};
}