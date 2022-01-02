// Generated from ./server/src/grammar/lib/epScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AnonymousFunctionExpressionContext } from "./epScriptParser";
import { MemberExpressionContext } from "./epScriptParser";
import { MemberDotExpressionContext } from "./epScriptParser";
import { ArgumentExpressionContext } from "./epScriptParser";
import { TernaryExpressionContext } from "./epScriptParser";
import { PostIncreaseExpressionContext } from "./epScriptParser";
import { PostDecreaseExpressionContext } from "./epScriptParser";
import { PreIncreaseExpressionContext } from "./epScriptParser";
import { PreDecreaseExpressionContext } from "./epScriptParser";
import { UnaryPlusExpressionContext } from "./epScriptParser";
import { UnaryMinusExpressionContext } from "./epScriptParser";
import { BitNotExpressionContext } from "./epScriptParser";
import { NotExpressionContext } from "./epScriptParser";
import { MultiplicateExpressionContext } from "./epScriptParser";
import { AddictiveExpressionContext } from "./epScriptParser";
import { BitShiftExpressionContext } from "./epScriptParser";
import { RelationalExpressionContext } from "./epScriptParser";
import { EqualityExpressionContext } from "./epScriptParser";
import { BitAndExpressionContext } from "./epScriptParser";
import { BitXOrExpressionContext } from "./epScriptParser";
import { BitOrExpressionContext } from "./epScriptParser";
import { LogicalAndExpressionContext } from "./epScriptParser";
import { LogicalOrExpressionContext } from "./epScriptParser";
import { AssignmentExpressionContext } from "./epScriptParser";
import { AssignmentOperatorExpressionContext } from "./epScriptParser";
import { ThisExpressionContext } from "./epScriptParser";
import { IdentifierExpressionContext } from "./epScriptParser";
import { LiteralExpressionContext } from "./epScriptParser";
import { ArrayLiteralExpressionContext } from "./epScriptParser";
import { ParanthesizedExpressionContext } from "./epScriptParser";
import { WhileStatementContext } from "./epScriptParser";
import { ForStatementContext } from "./epScriptParser";
import { ForeachStatementContext } from "./epScriptParser";
import { ProgramContext } from "./epScriptParser";
import { SourceElementContext } from "./epScriptParser";
import { StatementContext } from "./epScriptParser";
import { BlockContext } from "./epScriptParser";
import { StatementListContext } from "./epScriptParser";
import { ImportStatementContext } from "./epScriptParser";
import { DottedNameContext } from "./epScriptParser";
import { ImportNamespaceContext } from "./epScriptParser";
import { VariableStatementContext } from "./epScriptParser";
import { VariableDeclarationListContext } from "./epScriptParser";
import { VariableDeclarationContext } from "./epScriptParser";
import { EmptyStatementContext } from "./epScriptParser";
import { AssignAbleContext } from "./epScriptParser";
import { ExpressionStatementContext } from "./epScriptParser";
import { VarModifierContext } from "./epScriptParser";
import { IfStatementContext } from "./epScriptParser";
import { IterationStatementContext } from "./epScriptParser";
import { ForeachBlockContext } from "./epScriptParser";
import { OnceStatementContext } from "./epScriptParser";
import { ContinueStatementContext } from "./epScriptParser";
import { BreakStatementContext } from "./epScriptParser";
import { ReturnStatementContext } from "./epScriptParser";
import { SwitchStatementContext } from "./epScriptParser";
import { CaseBlockContext } from "./epScriptParser";
import { CaseClausesContext } from "./epScriptParser";
import { CaseClauseContext } from "./epScriptParser";
import { DefaultClauseContext } from "./epScriptParser";
import { ObjectDeclarationContext } from "./epScriptParser";
import { ObjectTailContext } from "./epScriptParser";
import { ObjectElementContext } from "./epScriptParser";
import { ObjectVariableDeclarationContext } from "./epScriptParser";
import { TypeAnnotationContext } from "./epScriptParser";
import { Type_Context } from "./epScriptParser";
import { PrimaryTypeContext } from "./epScriptParser";
import { PredefinedTypeContext } from "./epScriptParser";
import { EncodedTypesContext } from "./epScriptParser";
import { FunctionDeclarationContext } from "./epScriptParser";
import { FormalParameterListContext } from "./epScriptParser";
import { FormalParameterArgContext } from "./epScriptParser";
import { LastFormalParameterArgContext } from "./epScriptParser";
import { FunctionBodyContext } from "./epScriptParser";
import { FunctionDefineContext } from "./epScriptParser";
import { SourceElementsContext } from "./epScriptParser";
import { ArrayLiteralContext } from "./epScriptParser";
import { ElementListContext } from "./epScriptParser";
import { ArrayElementContext } from "./epScriptParser";
import { ArgumentsContext } from "./epScriptParser";
import { ArgumentListContext } from "./epScriptParser";
import { ArgumentContext } from "./epScriptParser";
import { ExpressionSequenceContext } from "./epScriptParser";
import { SingleExpressionContext } from "./epScriptParser";
import { AnonymosuFunctionContext } from "./epScriptParser";
import { AssignmentOperatorContext } from "./epScriptParser";
import { LiteralContext } from "./epScriptParser";
import { NumericLiteralContext } from "./epScriptParser";
import { IdentifierNameContext } from "./epScriptParser";
import { IdentifierContext } from "./epScriptParser";
import { ReservedWordContext } from "./epScriptParser";
import { KeywordContext } from "./epScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `epScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface epScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `AnonymousFunctionExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousFunctionExpression?: (ctx: AnonymousFunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberExpression?: (ctx: MemberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDotExpression?: (ctx: MemberDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArgumentExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExpression?: (ctx: ArgumentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostIncreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncreaseExpression?: (ctx: PostIncreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreIncreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncreaseExpression?: (ctx: PreIncreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicateExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicateExpression?: (ctx: MultiplicateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddictiveExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddictiveExpression?: (ctx: AddictiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXOrExpression?: (ctx: BitXOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignmentOperatorExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParanthesizedExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParanthesizedExpression?: (ctx: ParanthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForeachStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeachStatement?: (ctx: ForeachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElement?: (ctx: SourceElementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.dottedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDottedName?: (ctx: DottedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.importNamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportNamespace?: (ctx: ImportNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStatement?: (ctx: VariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.assignAble`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignAble?: (ctx: AssignAbleContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.varModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarModifier?: (ctx: VarModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.foreachBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeachBlock?: (ctx: ForeachBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.onceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnceStatement?: (ctx: OnceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseBlock?: (ctx: CaseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClauses?: (ctx: CaseClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.caseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClause?: (ctx: CaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultClause?: (ctx: DefaultClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.objectDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectDeclaration?: (ctx: ObjectDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.objectTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectTail?: (ctx: ObjectTailContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.objectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectElement?: (ctx: ObjectElementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.objectVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectVariableDeclaration?: (ctx: ObjectVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.typeAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryType?: (ctx: PrimaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.predefinedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefinedType?: (ctx: PredefinedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.encodedTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncodedTypes?: (ctx: EncodedTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterArg?: (ctx: FormalParameterArgContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.functionDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefine?: (ctx: FunctionDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElements?: (ctx: SourceElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.elementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementList?: (ctx: ElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.arrayElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayElement?: (ctx: ArrayElementContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.anonymosuFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymosuFunction?: (ctx: AnonymosuFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.identifierName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierName?: (ctx: IdentifierNameContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `epScriptParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;
}

