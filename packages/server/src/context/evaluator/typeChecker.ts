import type { Node } from "web-tree-sitter";

export function isAnonymousFunctionExpression(node: Node): boolean {
  return node.type === "lambda_expression";
}
export function isMemberExpression(node: Node): boolean {
  return node.type === "subscript_expression";
}
export function isMemberDotExpression(node: Node): boolean {
  return node.type === "member_expression";
}
export function isCallExpression(node: Node): boolean {
  return node.type === "call_expression";
}
export function isTernaryExpression(node: Node): boolean {
  return node.type === "ternary_expression";
}
export function isPostfixExpression(node: Node): boolean {
  return node.type === "update_expression";
}
export function isPrefixExpression(node: Node): boolean {
  return node.type === "unary_expression";
}
export function isBinaryExpression(node: Node): boolean {
  return node.type === "binary_expression";
}
export function isThisExpression(node: Node): boolean {
  return node.type === "this";
}
export function isIdentifierExpression(node: Node): boolean {
  return node.type === "identifier";
}
export function isBooleanLiteralExpression(node: Node): boolean {
  return node.type === "true" || node.type === "false";
}
export function isStringLiteralExpression(node: Node): boolean {
  return node.type === "string";
}
export function isNumericLiteralExpression(node: Node): boolean {
  return node.type === "number";
}
export function isArrayLiteralExpression(node: Node): boolean {
  return node.type === "array";
}
export function isParanthesizedExpression(node: Node): boolean {
  return node.type === "parenthesized_expression";
}
