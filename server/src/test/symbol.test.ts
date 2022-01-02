import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { epScriptLexer } from '../../../server/src/grammar/epScriptLexer';
import { epScriptParser } from '../../../server/src/grammar/epScriptParser';
import { BaseListener } from '../../../server/src/context/listener/baseListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import * as path from 'path';
import { expect } from 'chai';
import { FunctionSymbol } from '../context/symbolTable/FunctionSymbol';
import { ParameterSymbol } from '../context/symbolTable/ParameterSymbol';

describe('Symbol Test', () => {
	const docString = readFileSync(path.resolve(__dirname, 'testFixture/symbol.eps'), 'utf8');
	const listener = new BaseListener();
	const charStream = CharStreams.fromString(docString);
	const lexer = new epScriptLexer(charStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new epScriptParser(tokenStream);
	const walker = new ParseTreeWalker();
	walker.walk(listener as ParseTreeListener, parser.program());
	const table = listener.symbolTable;

	const helloWorldFunc = table.globalScope.getSymbolByName('helloWorld') as FunctionSymbol;
	it('Function Test', () => {
		expect(helloWorldFunc).is.exist; // 함수 심볼 존재 확인
		expect(helloWorldFunc).is.instanceOf(FunctionSymbol, 'is instanceof FunctionSymbol');
		console.log(helloWorldFunc.getSymbols().filter(x => x instanceof ParameterSymbol)[0]);
		expect(helloWorldFunc.getSymbols().filter(x => x instanceof ParameterSymbol)).length(3, 'Parameter Symbol Length');
	});
});