import { Literal } from '../context/evaluator/literal';
import { ClassSymbol } from '../context/symbolTable/ClassSymbol';
import { ModuleSymbol } from '../context/symbolTable/ModuleSymbol';
import { VariableSymbol } from '../context/symbolTable/VariableSymbol';

export function literalToType(literal: Literal): Literal {
	switch (typeof literal) {
		case 'string':
			return 'string';
		case 'number':
			return 'number';
		case 'boolean':
			return 'boolean';
		case 'undefined':
			return 'undefined';
		case 'object':
			if (ClassSymbol.isClassSymbol(literal)) return literal.name;
			if (Array.isArray(literal)) return `(${[...new Set<Literal>(literal.map(x => literalToType(x)))].join(' | ')})[]`;
			if (ModuleSymbol.isModule(literal)) return literal.name;
			if (VariableSymbol.isVariableSymbol(literal)) return literalToType(literal.value);
			if (literal === null) return 'void';
	}

	// 아무런 매칭도 되지 않을 경우 리터럴 반환.
	return literal;
}