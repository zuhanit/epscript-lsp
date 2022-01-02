// Generated from ./server/src/grammar/lib/epScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `epScriptParser`.
 */
export interface epScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `AnonymousFunctionExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAnonymousFunctionExpression?: (ctx: AnonymousFunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AnonymousFunctionExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAnonymousFunctionExpression?: (ctx: AnonymousFunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberExpression?: (ctx: MemberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberExpression?: (ctx: MemberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArgumentExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentExpression?: (ctx: ArgumentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentExpression?: (ctx: ArgumentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostIncreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncreaseExpression?: (ctx: PostIncreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncreaseExpression?: (ctx: PostIncreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreIncreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncreaseExpression?: (ctx: PreIncreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncreaseExpression?: (ctx: PreIncreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicateExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicateExpression?: (ctx: MultiplicateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicateExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicateExpression?: (ctx: MultiplicateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AddictiveExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAddictiveExpression?: (ctx: AddictiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AddictiveExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAddictiveExpression?: (ctx: AddictiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `assignmentOperatorExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `assignmentOperatorExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ThisExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParanthesizedExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParanthesizedExpression?: (ctx: ParanthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParanthesizedExpression`
	 * labeled alternative in `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParanthesizedExpression?: (ctx: ParanthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `WhileStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForeachStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForeachStatement?: (ctx: ForeachStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForeachStatement`
	 * labeled alternative in `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForeachStatement?: (ctx: ForeachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	enterSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	exitSourceElement?: (ctx: SourceElementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.dottedName`.
	 * @param ctx the parse tree
	 */
	enterDottedName?: (ctx: DottedNameContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.dottedName`.
	 * @param ctx the parse tree
	 */
	exitDottedName?: (ctx: DottedNameContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.importNamespace`.
	 * @param ctx the parse tree
	 */
	enterImportNamespace?: (ctx: ImportNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.importNamespace`.
	 * @param ctx the parse tree
	 */
	exitImportNamespace?: (ctx: ImportNamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.assignAble`.
	 * @param ctx the parse tree
	 */
	enterAssignAble?: (ctx: AssignAbleContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.assignAble`.
	 * @param ctx the parse tree
	 */
	exitAssignAble?: (ctx: AssignAbleContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.varModifier`.
	 * @param ctx the parse tree
	 */
	enterVarModifier?: (ctx: VarModifierContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.varModifier`.
	 * @param ctx the parse tree
	 */
	exitVarModifier?: (ctx: VarModifierContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.foreachBlock`.
	 * @param ctx the parse tree
	 */
	enterForeachBlock?: (ctx: ForeachBlockContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.foreachBlock`.
	 * @param ctx the parse tree
	 */
	exitForeachBlock?: (ctx: ForeachBlockContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.onceStatement`.
	 * @param ctx the parse tree
	 */
	enterOnceStatement?: (ctx: OnceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.onceStatement`.
	 * @param ctx the parse tree
	 */
	exitOnceStatement?: (ctx: OnceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	enterCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	exitCaseClauses?: (ctx: CaseClausesContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.objectDeclaration`.
	 * @param ctx the parse tree
	 */
	enterObjectDeclaration?: (ctx: ObjectDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.objectDeclaration`.
	 * @param ctx the parse tree
	 */
	exitObjectDeclaration?: (ctx: ObjectDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.objectTail`.
	 * @param ctx the parse tree
	 */
	enterObjectTail?: (ctx: ObjectTailContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.objectTail`.
	 * @param ctx the parse tree
	 */
	exitObjectTail?: (ctx: ObjectTailContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.objectElement`.
	 * @param ctx the parse tree
	 */
	enterObjectElement?: (ctx: ObjectElementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.objectElement`.
	 * @param ctx the parse tree
	 */
	exitObjectElement?: (ctx: ObjectElementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.objectVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterObjectVariableDeclaration?: (ctx: ObjectVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.objectVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitObjectVariableDeclaration?: (ctx: ObjectVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimaryType?: (ctx: PrimaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimaryType?: (ctx: PrimaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	enterPredefinedType?: (ctx: PredefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	exitPredefinedType?: (ctx: PredefinedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.encodedTypes`.
	 * @param ctx the parse tree
	 */
	enterEncodedTypes?: (ctx: EncodedTypesContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.encodedTypes`.
	 * @param ctx the parse tree
	 */
	exitEncodedTypes?: (ctx: EncodedTypesContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterArg?: (ctx: FormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterArg?: (ctx: FormalParameterArgContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.functionDefine`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefine?: (ctx: FunctionDefineContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.functionDefine`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefine?: (ctx: FunctionDefineContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	enterSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	exitSourceElements?: (ctx: SourceElementsContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	enterElementList?: (ctx: ElementListContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.elementList`.
	 * @param ctx the parse tree
	 */
	exitElementList?: (ctx: ElementListContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	enterArrayElement?: (ctx: ArrayElementContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	exitArrayElement?: (ctx: ArrayElementContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.anonymosuFunction`.
	 * @param ctx the parse tree
	 */
	enterAnonymosuFunction?: (ctx: AnonymosuFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.anonymosuFunction`.
	 * @param ctx the parse tree
	 */
	exitAnonymosuFunction?: (ctx: AnonymosuFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.identifierName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierName?: (ctx: IdentifierNameContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `epScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `epScriptParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
}

