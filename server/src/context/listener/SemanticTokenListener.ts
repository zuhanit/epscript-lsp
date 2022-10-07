import { ParserRuleContext, TokenStreamRewriter } from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { SemanticTokensBuilder } from "vscode-languageserver";
import { BuilderItem, TokenType } from "../../document/semanticToken";
import {
  AnonymosuFunctionContext,
  ArgumentContext,
  ArrayElementContext,
  BinaryOperatorContext,
  BlockContext,
  BooleanLiteralExpressionContext,
  BreakStatementContext,
  CallExpressionContext,
  CaseClauseContext,
  ContinueStatementContext,
  DefaultClauseContext,
  ForeachBlockContext,
  ForeachStatementContext,
  FormalParameterArgContext,
  ForStatementContext,
  FunctionDeclarationContext,
  FunctionDefineContext,
  IfStatementContext,
  ImportStatementContext,
  KeywordContext,
  MemberDotExpressionContext,
  NumericLiteralContext,
  NumericLiteralExpressionContext,
  ObjectDeclarationContext,
  ObjectVariableDeclarationContext,
  OnceStatementContext,
  PostfixOperatorContext,
  PrefixOperatorContext,
  ReturnStatementContext,
  StringLiteralExpressionContext,
  SwitchStatementContext,
  TypeAnnotationContext,
  VariableDeclarationContext,
  VariableDeclarationListContext,
  WhileStatementContext,
} from "../../grammar/src/grammar/lib/epScriptParser";
import { epScriptParserListener } from "../../grammar/src/grammar/lib/epScriptParserListener";
import { ContextPackage } from "../IContextPackage";

export class SemanticTokenListener implements epScriptParserListener {
  constructor(private builder: SemanticTokensBuilder) {}

  enterImportStatement?: ((ctx: ImportStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Import(), TokenType.keyword);
    this.push(ctx.dottedName(), TokenType.namespace);
  };

  enterVariableDeclarationList?:
    | ((ctx: VariableDeclarationListContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.varModifier(), TokenType.keyword);
  };

  enterVariableDeclaration?:
    | ((ctx: VariableDeclarationContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.assignAble(), TokenType.variable);
  };

  enterIfStatement?: ((ctx: IfStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.If(), TokenType.keyword);
    const elseKeyword = ctx.Else();
    if (elseKeyword) {
      this.push(elseKeyword, TokenType.keyword);
    }
  };

  enterWhileStatement?: ((ctx: WhileStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.While(), TokenType.keyword);
  };

  enterForStatement?: ((ctx: ForStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.For(), TokenType.keyword);
  };

  enterForeachStatement?: ((ctx: ForeachStatementContext) => void) | undefined =
    (ctx) => {
      this.push(ctx.Foreach(), TokenType.keyword);
    };

  enterForeachBlock?: ((ctx: ForeachBlockContext) => void) | undefined = (
    ctx
  ) => {
    ctx.identifier().forEach((id) => this.push(id, TokenType.variable));
  };

  enterOnceStatement?: ((ctx: OnceStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Once(), TokenType.keyword);
  };

  enterContinueStatement?:
    | ((ctx: ContinueStatementContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.Continue(), TokenType.keyword);
  };

  enterBreakStatement?: ((ctx: BreakStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Break(), TokenType.keyword);
  };

  enterReturnStatement?: ((ctx: ReturnStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Return(), TokenType.keyword);
  };

  enterSwitchStatement?: ((ctx: SwitchStatementContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Switch(), TokenType.keyword);
  };

  enterCaseClause?: ((ctx: CaseClauseContext) => void) | undefined = (ctx) => {
    this.push(ctx.Case(), TokenType.keyword);
  };

  enterDefaultClause?: ((ctx: DefaultClauseContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Default(), TokenType.keyword);
  };

  enterObjectDeclaration?:
    | ((ctx: ObjectDeclarationContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.Object(), TokenType.keyword);
    this.push(ctx.identifier(), TokenType.class);
  };

  enterObjectVariableDeclaration?:
    | ((ctx: ObjectVariableDeclarationContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.Var(), TokenType.keyword);
    this.push(ctx.identifier(), TokenType.property);
  };

  enterTypeAnnotation?: ((ctx: TypeAnnotationContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.singleExpression(), TokenType.typeParameter);
  };

  enterFunctionDeclaration?:
    | ((ctx: FunctionDeclarationContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.Function(), TokenType.keyword);
    this.push(ctx.identifier(), TokenType.function);
  };

  enterFormalParameterArg?:
    | ((ctx: FormalParameterArgContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.assignAble(), TokenType.parameter);
  };

  enterFunctionDefine?: ((ctx: FunctionDefineContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.Function(), TokenType.keyword);
    this.push(ctx.identifier(), TokenType.function);
  };

  enterCallExpression?: ((ctx: CallExpressionContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx.singleExpression(), TokenType.function);
  };

  enterMemberDotExpression?:
    | ((ctx: MemberDotExpressionContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.singleExpression(), TokenType.variable);
    this.push(ctx.identifier(), TokenType.property);
  };

  enterBooleanLiteralExpression?:
    | ((ctx: BooleanLiteralExpressionContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.BooleanLiterl(), TokenType.keyword);
  };

  enterStringLiteralExpression?:
    | ((ctx: StringLiteralExpressionContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.StringLiteral(), TokenType.string);
  };

  enterNumericLiteralExpression?:
    | ((ctx: NumericLiteralExpressionContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.numericLiteral(), TokenType.number);
  };

  enterAnonymosuFunction?:
    | ((ctx: AnonymosuFunctionContext) => void)
    | undefined = (ctx) => {
    this.push(ctx.Function(), TokenType.keyword);
  };

  enterPostfixOperator?: ((ctx: PostfixOperatorContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx, TokenType.operator);
  };

  enterPrefixOperator?: ((ctx: PrefixOperatorContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx, TokenType.operator);
  };

  enterBinaryOperator?: ((ctx: BinaryOperatorContext) => void) | undefined = (
    ctx
  ) => {
    this.push(ctx, TokenType.operator);
  };

  enterKeyword?: ((ctx: KeywordContext) => void) | undefined = (ctx) => {
    this.push(ctx, TokenType.keyword);
  };

  private push(ctx: ParserRuleContext | TerminalNode, tokenType: number): void {
    this.builder.push(...this.getSemanticTokenItem(ctx, tokenType));
  }

  private getSemanticTokenItem(
    ctx: ParserRuleContext | TerminalNode,
    tokenType: number
  ): BuilderItem {
    if (ctx instanceof ParserRuleContext) {
      return [
        ctx.start.line - 1,
        ctx.start.charPositionInLine,
        ctx.text.length,
        tokenType,
        0,
      ];
    } else {
      return [
        ctx.symbol.line - 1,
        ctx.symbol.charPositionInLine,
        ctx.text.length,
        tokenType,
        0,
      ];
    }
  }
}
