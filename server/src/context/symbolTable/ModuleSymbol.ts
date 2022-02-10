import { BaseSymbol } from './BaseSymbol';
import { SymbolWithScope } from './SymbolWithScope';
import { Type } from './Type';
import { TypedSymbol } from './TypedSymbol';

export class ModuleSymbol extends SymbolWithScope implements TypedSymbol {
	type: Type = {name: 'module'};

	public static isModule(arg: any): arg is ModuleSymbol {
		return arg instanceof ModuleSymbol;
	}
}