import { SingleExpressionContext } from '../../grammar/src/grammar/lib/epScriptParser';
import { IScope } from '../symbolTable/IScope';
import { ISymbol } from '../symbolTable/ISymbol';
import { SymbolTable } from '../symbolTable/SymbolTable';
import { evaluateAnonymousFunctionExpression } from './evaluate-anonymous-function-expression';
import { evaluateCallExpression } from './evaluate-call-expression';
import { evaluateArrayLiteralExpression } from './evaluate-array-literal-expression';
import { evaluateBinaryExpression } from './evaluate-binary-expression';
import { evaluateIdentifierExpression } from './evaluate-identifier-expression';
import { evaluateMemberDotExpression } from './evaluate-member-dot-expression';
import { evaluateMemberExpression } from './evaluate-member-expression';
import { evaluateNumericLiteralExpression } from './evaluate-numeric-literal-expression';
import { evaluateParanthesizedExpression } from './evaluate-parenthesized-expression';
import { evaluatePostfixExpression } from './evaluate-postfix-expression';
import { evaluatePrefixExpression } from './evaluate-prefix-operator';
import { evaluateStringLiteralExpression } from './evaluate-string-literal-expression';
import { evaluateTernaryExpression } from './evaluate-ternary-expression';
import { evaluateThisExpression } from './evaluate-this-expression';
import { EvaluatorOption } from './evaluator-options';
import { Literal } from './literal';
import { isAnonymousFunctionExpression, isArrayLiteralExpression, isBinaryExpression, isCallExpression, isIdentifierExpression, isMemberDotExpression, isMemberExpression, isNumericLiteralExpression, isParanthesizedExpression, isPostfixExpression, isPrefixExpression, isStringLiteralExpression, isTernaryExpression, isThisExpression } from './typeChecker';

/***
 * 좀 더 생각을 해봐야할듯. 타입은 단순히 하나로만 지정될 수 있는 게 아니다. 예를 들어 Ternary Expression을 거친 경우 타입을 하나라 단정지을 수 없다.
*/

/**
 * 노드 표현식 평가를 위한 함수.
 * 
 * 표현식의 평가는 어디까지나 LSP에 사용되기 위함이므로, 자세하게 값을 계산하지는 않음에 주의.
 * 표현식을 평가해 심볼 테이블의 심볼 또는 스코프를 가져온다.
 * 
 * 가져오는 심볼의 종류는 `symbolTable` 폴더 참조.
 * @param param0 노드, 심볼 테이블, 현재 스코프
 * @returns 평가된 표현식의 값
 */
export function evaluateNode({node, ...rest}: EvaluatorOption<SingleExpressionContext>): Literal {
	if (isAnonymousFunctionExpression(node)) {
		return evaluateAnonymousFunctionExpression({node, ...rest});
	} else if (isMemberExpression(node)) {
		return evaluateMemberExpression({node, ...rest});
	} else if (isMemberDotExpression(node)) {
		return evaluateMemberDotExpression({node, ...rest});
	} else if (isCallExpression(node)) {
		return evaluateCallExpression({node, ...rest});
	} else if (isTernaryExpression(node)) {
		return evaluateTernaryExpression({node, ...rest});
	} else if (isPrefixExpression(node)) {
		return evaluatePrefixExpression({node: node, ...rest});
	} else if (isPostfixExpression(node)) {
		return evaluatePostfixExpression({node: node, ...rest});
	} else if (isBinaryExpression(node)) {
		return evaluateBinaryExpression({node: node, ...rest});
	} else if (isThisExpression(node)) {
		return evaluateThisExpression({node: node, ...rest});
	} else if (isIdentifierExpression(node)) {
		return evaluateIdentifierExpression({node: node, ...rest});
	} else if (isNumericLiteralExpression(node)) {
		return evaluateNumericLiteralExpression({node: node, ...rest});
	} else if (isStringLiteralExpression(node)) {
		return evaluateStringLiteralExpression({node: node, ...rest});
	} else if (isArrayLiteralExpression(node)) {
		return evaluateArrayLiteralExpression({node: node, ...rest});
	} else if (isParanthesizedExpression(node)) {
		return evaluateParanthesizedExpression({node: node, ...rest});
	}
}