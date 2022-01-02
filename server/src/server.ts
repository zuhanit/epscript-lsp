import {
	createConnection,
	Connection,
	InitializeParams,
	InitializeResult,
	ProposedFeatures,
	CancellationToken,
	CompletionItem,
	CompletionParams,
	TextDocumentSyncKind,
} from 'vscode-languageserver/node';

import { EPSServer } from './epsServer';

// eslint-disable-next-line prefer-const
let connection: Connection = createConnection(ProposedFeatures.all);

// 초기화시 일어날 핸들러 설정.
connection.onInitialize(async (params: InitializeParams): Promise<InitializeResult> => {
	connection.console.log('epScript Server initializing...');
	const startTime = Date.now();
	
	const server = await EPSServer.initialize(connection, params);
	server.register(connection);

	console.log(`Server registered, passed time: ${(Date.now() - startTime) / 1000} seconds`);

	return {
		capabilities: server.capabilities()
	};
});

connection.listen();