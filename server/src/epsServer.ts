/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	CompletionItemTag,
	Position,
	SemanticTokensBuilder,
	SemanticTokensRegistrationType,
	DocumentHighlight,
	MessageActionItem,
	Command,
	SignatureHelp,
	Connection,
	ServerCapabilities,
	HoverParams,
	CodeActionParams,
	SignatureHelpParams,
	DefinitionParams,
	ExecuteCommandParams,
	CompletionParams,
	CancellationToken
} from 'vscode-languageserver/node';

import { Analyzer } from './analyzer';
import { getCompletion } from './context';

/**
 * epScript 랭기지 서버.
 * 
 */
export class EPSServer
{
	private analyzer: Analyzer;
	private connection: Connection;
	private textDocument: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

	private constructor
		(
			connection: Connection,
			analyzer: Analyzer,
		)
	{
		this.connection = connection;
		this.analyzer = analyzer;
	}

	/**
	 * 서버 초기화 및 호출.
	 * 
	 * @param connection 랭기지 커넥션
	 * @param params 초기화 파라미터
	 * @returns 랭기지 서버
	 */
	public static async initialize
		(
			connection: Connection,
			params: InitializeParams,
		): Promise<EPSServer>
	{
		return Promise.all([
			Analyzer.initialize(connection, params),
		]).then(([
			analyzer,
		]) => {
			return new EPSServer(connection, analyzer);
		});
	}

	/**
	 * 서버 이벤트 핸들러 등록.
	 */
	public register(connection: Connection): void {
		this.textDocument.listen(connection);
		this.textDocument.onDidChangeContent((change) => {
			this.analyzer.analyze(change.document.uri, change.document.getText());
		});
		connection.onCompletion((params: CompletionParams, token: CancellationToken) => getCompletion(params));
	}

	/**
	 * 서버 capabilities 정의.
	 * 
	 * @returns ServerCapabilities
	 */
	public capabilities(): ServerCapabilities {
		console.log('Capabilities Get');
		return {
			textDocumentSync: TextDocumentSyncKind.Full,
			completionProvider: {
				resolveProvider: false,
				triggerCharacters: ['.'],
			}
		};
	}
}