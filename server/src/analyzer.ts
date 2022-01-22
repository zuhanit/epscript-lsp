import { ParserRuleContext } from 'antlr4ts';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Connection, InitializeParams, URI, WorkspaceFolder } from 'vscode-languageserver';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import { ContextPackage } from './context/IContextPackage';
import { Parser } from './parser';

/**
 * 문서 정리 프로그램.
 */
export class Analyzer {
	/**
	 * 클라이언트에 열려있는 문서 패키지.
	 */
	public documents = new Map<URI, ContextPackage>();
	public parser: Parser;

	constructor(parser: Parser) {
		this.parser = parser;
	}

	/**
	 * 분석기 초기화 및 호출.
	 * 
	 * @returns Analyzer
	 */
	public static async initialize
		(
			connection: Connection,
			params: InitializeParams,
			parser: Parser,
		): Promise<Analyzer>
	{
		// params.workspaceFolders
		console.log('Analyzer Initialized');
		const analyzer = new Analyzer(parser);
		return analyzer;
	}

	public async analyze
		(
			uri: URI,
			document: TextDocument,
		): Promise<ContextPackage>
	{
		const contextPackage: ContextPackage = {
			document: document,
			parsePackage: this.parser.parse(document),
		};
		this.documents.set(uri, contextPackage);
		return contextPackage;
	}

	public getNodeAtPosition
		(
			uri: URI,
			position: Position,
		)
	{
		const ast = this.documents.get(uri)?.parsePackage.ast;
		if (ast === undefined) return null;
		console.log(ast);
		return this.parseTreeFromPosition(ast, position.character, position.line + 1);
	}

	public parseTreeFromPosition = (root: ParseTree, column: number, row: number): ParseTree | undefined => {
		// Does the root node actually contain the position? If not we don't need to look further.
		if (root instanceof TerminalNode) {
			const terminal = (root);
			const token = terminal.symbol;
			if (token.line !== row) { return undefined; }
	
			const tokenStop = token.charPositionInLine + (token.stopIndex - token.startIndex + 1);
			if (token.charPositionInLine <= column && tokenStop >= column) {
				return terminal;
			}
	
			return undefined;
		} else {
			const context = (root as ParserRuleContext);
			if (!context.start || !context.stop) { // Invalid tree?
				return undefined;
			}
	
			if (context.start.line > row || (context.start.line === row && column < context.start.charPositionInLine)) {
				return undefined;
			}
	
			const tokenStop = context.stop.charPositionInLine + (context.stop.stopIndex - context.stop.startIndex + 1);
			if (context.stop.line < row || (context.stop.line === row && tokenStop < column)) {
				return undefined;
			}
	
			if (context.children) {
				for (const child of context.children) {
					const result = this.parseTreeFromPosition(child, column, row);
					if (result) {
						return result;
					}
				}
			}
	
			return context;
	
		}
	};

	public getWordAtPosition() {
		//
	}
}