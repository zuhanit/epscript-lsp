import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { readFile, readFileSync } from 'fs';
import { epScriptLexer } from '../../../server/src/grammar/epScriptLexer';
import { epScriptParser } from '../../../server/src/grammar/epScriptParser';
import { BaseListener } from '../../../server/src/context/listener/baseListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { epScriptParserListener } from '../../../server/src/grammar/epScriptParserListener';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import * as path from 'path';
import { expect } from 'chai';
import { FunctionSymbol } from '../context/symbolTable/FunctionSymbol';
import { VariableSymbol } from '../context/symbolTable/VariableSymbol';

describe('Scope Test', () => {
	const docString = readFileSync(path.resolve(__dirname, 'testFixture/scope.eps'), 'utf8');
	const listener = new BaseListener();
	const charStream = CharStreams.fromString(docString);
	const lexer = new epScriptLexer(charStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new epScriptParser(tokenStream);
	const walker = new ParseTreeWalker();
	walker.walk(listener as ParseTreeListener, parser.program());
	const table = listener.symbolTable;

	const helloWorldFunc = table.globalScope.getSymbolByName('helloWorld') as FunctionSymbol;
	it('Variables in Function Scope', () => {
		expect(helloWorldFunc.getSymbols().map(x => x instanceof VariableSymbol)).length(3);
	});
});