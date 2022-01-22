import { Hover, HoverParams, MarkupContent } from 'vscode-languageserver';
import { BaseScope } from '../context/symbolTable/BaseScope';
import { BaseSymbol } from '../context/symbolTable/BaseSymbol';
import { ClassSymbol } from '../context/symbolTable/ClassSymbol';
import { FunctionSymbol } from '../context/symbolTable/FunctionSymbol';
import { ISymbol } from '../context/symbolTable/ISymbol';
import { MemberSymbol } from '../context/symbolTable/MemberSymbol';
import { MethodSymbol } from '../context/symbolTable/MethodSymbol';
import { ParameterSymbol } from '../context/symbolTable/ParameterSymbol';
import { VariableSymbol } from '../context/symbolTable/VariableSymbol';
import { literalToType } from '../util/literalUtils';
import { ProviderOption } from './provider-option';

export function provideHoverItem({params, contextPackage}: ProviderOption<HoverParams>, name: string): Hover | undefined {
	const symbolTable = contextPackage.parsePackage.symbolTable;
	const symbol = symbolTable.getSymbolByName(name);
	let content: MarkupContent | undefined;

	if (symbol) content = getDocumentationForSymbol(symbol);

	console.log(params, symbol, content);

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
	if (symbol instanceof VariableSymbol) {
		if (symbol instanceof MemberSymbol) {
			value.push(`(property) ${symbol.scope.name}.${symbol.name}: ${literalToType(symbol.value)}`);
		} else {
			value.push(`${symbol.modifier} ${symbol.name}: ${symbol.value ? literalToType(symbol.value) : 'undefined'}`);
		}
	}

	if (symbol instanceof FunctionSymbol) {
		const args = symbol.getSymbols().filter<ParameterSymbol>(isParameterSymbol).map(x => `${x.name}: ${literalToType(x.type)}`);
		if (symbol instanceof MethodSymbol) {
			value.push(`(method) ${symbol.name}(${args.join(', ')}): ${literalToType(symbol.retType)}`);
		} else {
			value.push(`function ${symbol.name}(${args.join(', ')}): ${literalToType(symbol.retType)}`);
		}
	}

	if (symbol instanceof ClassSymbol) {
		value.push(`class ${symbol.name}`);
	}

	value.push('```');

	return {
		kind: 'markdown',
		value: value.join('\n')
	};
}

function isParameterSymbol(symbol: ISymbol): symbol is ParameterSymbol {
	return symbol instanceof ParameterSymbol;
}