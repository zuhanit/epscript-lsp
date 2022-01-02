import { ParserRuleContext } from 'antlr4ts';
import { IScope } from './IScope';
import { ISymbol } from './ISymbol';
import { Type } from './Type';

export abstract class BaseSymbol implements ISymbol {
	public name: string;
	public scope: IScope;
	public type: Type | undefined;
	public defNode: ParserRuleContext | undefined;

	constructor(
		name: string,
		scope: IScope,
		defNode?: ParserRuleContext,
	) {
		this.name = name;
		this.scope = scope;
		this.defNode = defNode;
	}

	public getFullyQualifiedName(): string {
		const path = this.scope.getEnclosingPathToRoot();
		return `${path.reverse().join('.')}.${this.name}`;
	}
}