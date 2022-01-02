import { CompletionItem, CompletionParams } from 'vscode-languageserver-protocol';

/**
 * 
 * @param params 컴플리션 파라미터
 */
export function getCompletion(params: CompletionParams): CompletionItem[] {
	const completions: CompletionItem[] = [];
	console.log('comp');
	completions.push({
		label: 'Hello World'
	});
	return completions;
}