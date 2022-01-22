import { CodeCompletionCore } from 'antlr4-c3';
import { CodePointCharStream, CharStreams, CommonTokenStream, CommonToken } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { URI } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { BaseListener } from './context/listener/baseListener';
import { SymbolTable } from './context/symbolTable/SymbolTable';
import { epScriptLexer } from './grammar/epScriptLexer';
import { epScriptParser, ProgramContext } from './grammar/epScriptParser';

export interface ParsePackage {
	symbolTable: SymbolTable;
	core: CodeCompletionCore;
	ast: ProgramContext;
}

export class Parser {
	/* @internal */
	private tokenStream: CommonTokenStream = new CommonTokenStream(new epScriptLexer(CharStreams.fromString(''))); // 수정 필요
	private parser: epScriptParser | undefined;
	constructor() {
		this.setText('');
	}

	public static initialize(): Parser {
		const parser = new Parser();
		return parser;
	}

	private setText(document: string) {
		const charStream = CharStreams.fromString(document);
		const lexer = new epScriptLexer(charStream);
		this.tokenStream = new CommonTokenStream(lexer);
	}

	public parse(document: TextDocument): ParsePackage {
		this.setText(document.getText());
		this.tokenStream.seek(0);
		this.parser = new epScriptParser(this.tokenStream);
		const tree = this.parser.program();
		const listener = new BaseListener(this, document, this.tokenStream);
		ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree);

		return {
			symbolTable: listener.symbolTable,
			core: new CodeCompletionCore(this.parser),
			ast: tree,
		};
	}
}