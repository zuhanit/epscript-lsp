import { Range } from 'vscode-languageserver';
import { BaseScope } from '../../context/symbolTable/BaseScope';
import { ClassSymbol } from '../../context/symbolTable/ClassSymbol';
import { FunctionSymbol } from '../../context/symbolTable/FunctionSymbol';
import { IScope } from '../../context/symbolTable/IScope';
import { MethodSymbol } from '../../context/symbolTable/MethodSymbol';
import { ParameterSymbol } from '../../context/symbolTable/ParameterSymbol';
import { zeroRange } from '../../util/range';
import { builtinClasses } from './classes';
import { builtinFunctions } from './funcs';

/**
 * EUDDraft 기본 함수들 심볼 형태로 얻어오기.
 * 
 * @param scope 들어갈 스코프
 * @returns FunctionSymbol[]
 */
export function getAllEUDFunctions(scope: BaseScope): FunctionSymbol[] {
	const funcs = builtinFunctions.map(x => {
		const symbol = new FunctionSymbol(
			x.name.startsWith('f_')
				? x.name.substring(2, x.name.length + 2)
				: x.name,
			zeroRange,
			zeroRange,
			scope,
		);
		x.args.forEach((y) => {
			const argSymbol = new ParameterSymbol(y, symbol, zeroRange);
			symbol.insert(argSymbol);
			symbol.arguments.push(argSymbol);
		});
		symbol.docString = x.doc;
		return symbol;
	});
	return funcs;
}

/**
 * EUDDraft 기본 클래스 심볼 형태로 얻어오기.
 * 
 * @param scope 들어갈 스코프
 * @returns ClassSymbol[]
 */
export function getAllEUDClasses(scope: BaseScope): ClassSymbol[] {
	const classes = builtinClasses.map(x => {
		const symbol = new ClassSymbol(
			x.name,
			zeroRange,
			zeroRange,
			scope,
		);
		x.methods.forEach((method) => {
			const methodSymbol = new MethodSymbol(
				method.name,
				zeroRange,
				zeroRange,
				symbol,
			);
			methodSymbol.docString = method.doc;
			method.args.forEach(methodParameter => {
				methodSymbol.insert(new ParameterSymbol(
					methodParameter,
					methodSymbol,
					zeroRange,
				));
			});
			symbol.insert(methodSymbol);
		});
		symbol.docString = x.doc;
		return symbol;
	});
	return classes;
}