import { Position } from 'vscode-languageserver';
import { zeroRange } from '../../util/range';
import { BaseScope } from './BaseScope';
import { BaseSymbol } from './BaseSymbol';
import { GlobalScope } from './GlobalScope';
import { ISymbol } from './ISymbol';
import { PredefinedScope } from './PredefinedScope';

export class SymbolTable {
	predefinedScope: PredefinedScope = new PredefinedScope(zeroRange);
	globalScope: GlobalScope = new GlobalScope(zeroRange, this.predefinedScope);

	insertPredefinedSymbol(symbol: ISymbol) {
		this.predefinedScope.insert(symbol);
	}

	insertGlobalSymbol(symbol: ISymbol) {
		this.globalScope.insert(symbol);
	}

	/**
	 * 편의 목적 함수들.
	 */
	getSymbolByName(name: string): BaseSymbol | undefined {
		console.log(this.predefinedScope);
		let result = this.globalScope.getAllSymbols().find(symbol => symbol.name === name) as BaseSymbol;
		// PredfinedSymbol인지 확인.
		if (result === undefined) result = this.predefinedScope.getAllSymbols().find(symbol => symbol.name === name) as BaseSymbol;
		return result;
	}
}