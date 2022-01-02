import { ClassSymbol } from '../../context/symbolTable/ClassSymbol';
import { FunctionSymbol } from '../../context/symbolTable/FunctionSymbol';
import { IScope } from '../../context/symbolTable/IScope';
import { MethodSymbol } from '../../context/symbolTable/MethodSymbol';
import { ParameterSymbol } from '../../context/symbolTable/ParameterSymbol';
import { builtinClasses } from './classes';
import { builtinFunctions } from './funcs';


export function getAllEUDFunctions(scope: IScope): FunctionSymbol[] {
	const funcs = builtinFunctions.map(x => {
		const symbol = new FunctionSymbol(
			x.name,
			scope,
		);
		x.args.forEach((y) => {
			symbol.insert(
				new ParameterSymbol(
					y,
					symbol,
				)
			);
		});
		symbol.docString = x.doc;
		return symbol;
	});
	return funcs;
}

export function getAllEUDClasses(scope: IScope): ClassSymbol[] {
	const classes = builtinClasses.map(x => {
		const symbol = new ClassSymbol(
			x.name,
			scope,
		);
		x.methods.forEach((method) => {
			const methodSymbol = new MethodSymbol(
				method.name,
				symbol,
			);
			methodSymbol.docString = method.doc;
			method.args.forEach(methodParameter => {
				methodSymbol.insert(new ParameterSymbol(
					methodParameter,
					methodSymbol,
				));
			});
			symbol.insert(methodSymbol);
		});
		symbol.docString = x.doc;
		return symbol;
	});
	return classes;
}