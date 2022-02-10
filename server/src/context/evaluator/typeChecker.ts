import { ParserRuleContext } from 'antlr4ts';
import { AnonymousFunctionExpressionContext, MemberExpressionContext, MemberDotExpressionContext, CallExpressionContext, TernaryExpressionContext, PostfixExpressionContext, PrefixExpressionContext, BinaryExpressionContext, ThisExpressionContext, IdentifierExpressionContext, ArrayLiteralExpressionContext, ParanthesizedExpressionContext, BooleanLiteralExpressionContext, NumericLiteralExpressionContext, StringLiteralExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';

export function isAnonymousFunctionExpression(node: ParserRuleContext): node is AnonymousFunctionExpressionContext {
    return node instanceof AnonymousFunctionExpressionContext;
}
export function isMemberExpression(node: ParserRuleContext): node is MemberExpressionContext {
    return node instanceof MemberExpressionContext;
}
export function isMemberDotExpression(node: ParserRuleContext): node is MemberDotExpressionContext {
    return node instanceof MemberDotExpressionContext;
}
export function isCallExpression(node: ParserRuleContext): node is CallExpressionContext {
    return node instanceof CallExpressionContext;
}
export function isTernaryExpression(node: ParserRuleContext): node is TernaryExpressionContext {
    return node instanceof TernaryExpressionContext;
}
export function isPostfixExpression(node: ParserRuleContext): node is PostfixExpressionContext {
    return node instanceof PostfixExpressionContext;
}
export function isPrefixExpression(node: ParserRuleContext): node is PrefixExpressionContext {
    return node instanceof PrefixExpressionContext;
}
export function isBinaryExpression(node: ParserRuleContext): node is BinaryExpressionContext {
    return node instanceof BinaryExpressionContext;
}
export function isThisExpression(node: ParserRuleContext): node is ThisExpressionContext {
    return node instanceof ThisExpressionContext;
}
export function isIdentifierExpression(node: ParserRuleContext): node is IdentifierExpressionContext {
    return node instanceof IdentifierExpressionContext;
}
export function isBooleanLiteralExpression(node: ParserRuleContext): node is BooleanLiteralExpressionContext {
    return node instanceof BooleanLiteralExpressionContext;
}
export function isStringLiteralExpression(node: ParserRuleContext): node is StringLiteralExpressionContext {
    return node instanceof StringLiteralExpressionContext;
}
export function isNumericLiteralExpression(node: ParserRuleContext): node is NumericLiteralExpressionContext {
    return node instanceof NumericLiteralExpressionContext;
}
export function isArrayLiteralExpression(node: ParserRuleContext): node is ArrayLiteralExpressionContext {
    return node instanceof ArrayLiteralExpressionContext;
}
export function isParanthesizedExpression(node: ParserRuleContext): node is ParanthesizedExpressionContext {
    return node instanceof ParanthesizedExpressionContext;
}