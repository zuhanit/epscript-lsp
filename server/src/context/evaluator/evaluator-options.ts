import { ParserRuleContext } from 'antlr4ts';
import { BaseScope } from '../symbolTable/BaseScope';
import { SymbolTable } from '../symbolTable/SymbolTable';

export interface EvaluatorOption<T extends ParserRuleContext> {
	node: T;
	symbolTable: SymbolTable;
	currentScope: BaseScope;
}