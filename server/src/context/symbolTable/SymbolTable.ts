import { GlobalScope } from './GlobalScope';
import { ISymbol } from './ISymbol';
import { PredefinedScope } from './PredefinedScope';

export class SymbolTable {
	predefinedScope: PredefinedScope = new PredefinedScope();
	globalScope: GlobalScope = new GlobalScope(this.predefinedScope);

	insertPredefinedSymbol(symbol: ISymbol) {
		this.predefinedScope.insert(symbol);
	}

	insertGlobalSymbol(symbol: ISymbol) {
		this.globalScope.insert(symbol);
	}
}