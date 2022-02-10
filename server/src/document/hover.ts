import { Hover, HoverParams, MarkupContent } from 'vscode-languageserver';
import { getSymbolInfo } from '../context/facade';
import { BaseSymbol } from '../context/symbolTable/BaseSymbol';
import { ProviderOption } from './provider-option';


export function provideHoverItem({params, contextPackage, name}: ProviderOption<HoverParams>): Hover | undefined {
	const symbolTable = contextPackage.parsePackage.symbolTable;
	const symbol = symbolTable.getSymbolByName(name);
	let content: MarkupContent | undefined;

	console.log(symbol);
	if (symbol) content = getDocumentationForSymbol(symbol);

	if (content) {
		return {
			contents: content,
		};
	}

	return undefined;
}

/**
 * 심볼에 따른 Hover 내용을 얻어오기 위한 함수.
 * 
 * @param symbol 설명을 얻어올 심볼
 * @returns 
 */
function getDocumentationForSymbol(symbol: BaseSymbol): MarkupContent {
	const value: string[] = ['```epscript'];
	
	const info = getSymbolInfo(symbol);
	value.push(info.detail);

	value.push('```');

	return {
		kind: 'markdown',
		value: value.join('\n')
	};
}