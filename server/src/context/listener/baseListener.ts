import { FormalParameterArgContext, FunctionDeclarationContext, ProgramContext, VariableDeclarationContext, VariableDeclarationListContext, VariableStatementContext } from '../../grammar/epScriptParser';
import { epScriptParserListener } from '../../grammar/epScriptParserListener';
import { getAllEUDClasses, getAllEUDFunctions } from '../../lib/eudplib/builtin';
import { BaseScope } from '../symbolTable/BaseScope';
import { FunctionSymbol as FunctionSymbol } from '../symbolTable/FunctionSymbol';
import { IScope } from '../symbolTable/IScope';
import { ParameterSymbol } from '../symbolTable/ParameterSymbol';
import { SymbolTable } from '../symbolTable/SymbolTable';
import { VariableSymbol } from '../symbolTable/VariableSymbol';
import { TypedSymbol } from '../symbolTable/TypedSymbol';

export class BaseListener implements epScriptParserListener {
	public symbolTable: SymbolTable = new SymbolTable();
	private currentScope: IScope = this.symbolTable.globalScope;

	enterProgram(ctx: ProgramContext): void {
		getAllEUDFunctions(this.symbolTable.predefinedScope).forEach((x) => {
			this.symbolTable.insertPredefinedSymbol(x);
		});
		getAllEUDClasses(this.symbolTable.predefinedScope).forEach(x => {
			this.symbolTable.insertPredefinedSymbol(x);
		});
	}

	enterVariableDeclarationList(ctx: VariableDeclarationListContext) {
		const modifier: string = ctx.varModifier().text;
		const symbols = ctx.variableDeclaration().map((x) => {
			const symbol = new VariableSymbol(
				x.assignAble().text,
				this.currentScope,
				x
			);
			symbol.modifier = modifier === 'var' ? 'var' : 'const';
			return symbol;
		});
		symbols.forEach((x) => this.currentScope.insert(x));
	}

	enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
		const symbol = new FunctionSymbol(ctx.identifier().text, this.currentScope);
		this.currentScope.insert(symbol);
		this.pushScope(symbol);
	}

	exitFunctionDeclaration(ctx: FunctionDeclarationContext) {
		this.popScope();
	}

	enterFormalParameterArg(ctx: FormalParameterArgContext) {
		const symbol = new ParameterSymbol(ctx.assignAble().text, this.currentScope);
		const typeName = ctx.typeAnnotation()?.type_().text;
		if (typeName) {
			const resolved = this.symbolTable.globalScope.resolve(typeName);
			if (resolved && "type" in resolved) {
				symbol.type = resolved;
			}
		}
		this.currentScope.insert(symbol);
	}

	/**
	 * 스코프 집어넣기.
	 * @param scope 대상 스코프
	 */
	pushScope(scope: BaseScope): void {
		this.currentScope = scope;
	}

	/**
	 * 부모 스코프로 이동.
	 */
	popScope(): void {
		if (this.currentScope.parent) {
			this.currentScope = this.currentScope.parent;
		} else {
			throw new Error('Cannot pop scope with no parent');
		}
	}
}