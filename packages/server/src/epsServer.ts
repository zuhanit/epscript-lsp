/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
  Diagnostic,
  InitializeParams,
  CompletionItem,
  TextDocumentSyncKind,
  Connection,
  ServerCapabilities,
  HoverParams,
  DefinitionParams,
  CompletionParams,
  Hover,
  Definition,
  DidChangeConfigurationParams,
  CreateFilesParams,
  DidChangeConfigurationNotification,
  SignatureHelpParams,
  DocumentSymbolParams,
  DocumentSymbol,
  SymbolInformation,
} from "vscode-languageserver/node";

import {
  TextDocuments,
  TextDocumentChangeEvent,
} from "vscode-languageserver/lib/common/textDocuments";

import { Analyzer } from "./analyzer";
import { BaseScope } from "./context/symbolTable/BaseScope";
import { provideCompletion } from "./document/completion";
import { provideDefinition } from "./document/definition";
import { provideHoverItem } from "./document/hover";
import { LanguageManager } from "./i18n/LanguageManager";
import { Parser } from "./parser";
import { provideSingatureHelp } from "./document/signatureHelp";
import { evaluateNode } from "./context/evaluator/evaluator";
import {
  CallExpressionContext,
  SingleExpressionContext,
} from "./grammar/lib/epScriptParser";
import { getDocumentSymbol } from "./document/documentSymbol";
import { getWorkspaceSymbol } from "./document/workspaceSymbol";
import {
  provideTokens,
  tokenModifiers,
  TokenType,
} from "./document/semanticToken";
import {
  MultipleConfigRequest,
  SelectConfigRequest,
} from "@epscript-lsp/types/src/requests";
import { NoConfigNotification } from "@epscript-lsp/types/src/notifications";
import { glob } from "glob";
import { URI } from "vscode-uri";
import path from "path";
import { TextDocument } from "vscode-languageserver-textdocument";

/**
 * epScript 랭기지 서버.
 *
 */
export class EPSServer {
  private analyzer: Analyzer;
  private connection: Connection;
  private textDocument: TextDocuments<TextDocument> = new TextDocuments(
    TextDocument
  );
  private configuration = {
    language: "en-us",
    diagnostics: true,
  };
  private constructor(
    connection: Connection,
    analyzer: Analyzer,
    private languageManager: LanguageManager
  ) {
    this.connection = connection;
    this.analyzer = analyzer;
  }
  public draftConfiguration:
    | {
        name: string;
        path: string;
        dir: string;
      }
    | undefined;
  /**
   * 서버 초기화 및 호출.
   *
   * @param connection 랭기지 커넥션
   * @param params 초기화 파라미터
   * @returns 랭기지 서버
   */
  public static async initialize(
    connection: Connection,
    params: InitializeParams
  ): Promise<EPSServer> {
    const parser = new Parser();
    const languageManager = new LanguageManager();
    return Promise.all([
      Analyzer.initialize(connection, params, parser, languageManager),
    ]).then(([analyzer]) => {
      return new EPSServer(connection, analyzer, languageManager);
    });
  }

  /**
   * 서버 이벤트 핸들러 등록.
   */
  public async register(connection: Connection): Promise<void> {
    this.textDocument.listen(connection);
    this.textDocument.onDidChangeContent(async (change) => {
      const contextPackage = this.analyzer.getContextPackageByURI(
        change.document.uri
      );

      if (contextPackage !== undefined) {
        this.analyzer.analyze(
          change.document.uri,
          change.document,
          this.languageManager,
          this.draftConfiguration?.dir
        );
      } else {
        this.analyzer.analyze(
          change.document.uri,
          change.document,
          this.languageManager,
          this.draftConfiguration?.dir
        );
      }
      this.configuration = await this.getConfiguration(change.document.uri);
      if (this.configuration.diagnostics === true) {
        this.connection.sendDiagnostics({
          uri: change.document.uri,
          diagnostics: this.onDiagnostic(change),
        });
      } else {
        this.connection.sendDiagnostics({
          uri: change.document.uri,
          diagnostics: [],
        });
      }
    });
    connection.languages.semanticTokens.on((params) => {
      const contextPackage = this.analyzer.getContextPackageByURI(
        params.textDocument.uri
      );

      if (!contextPackage) return { data: [] };

      const builder = provideTokens(contextPackage);
      return builder.build();
    });
    connection.languages.semanticTokens.onRange(() => {
      return {
        data: [],
      };
    });
    connection.workspace.onDidCreateFiles((params) =>
      this.onDidCreateFiles(params)
    );
    connection.onCompletion((params: CompletionParams) =>
      this.onCompletion(params)
    );
    connection.onHover((params: HoverParams) => this.onHover(params));
    connection.onDefinition((params: DefinitionParams) =>
      this.onDefinition(params)
    );
    connection.onSignatureHelp((params: SignatureHelpParams) =>
      this.onSignatureHelp(params)
    );
    connection.onDocumentSymbol((params) => this.onDocumentSymbol(params));
    connection.onWorkspaceSymbol(() => this.onWorkspaceSymbol());
    connection.onDidChangeConfiguration(
      (params: DidChangeConfigurationParams) =>
        this.onDidChangeConfiguration(params)
    );
    connection.onInitialized(async (params) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const p = params as any;
      console.log(
        `Server Initialized at ${new Date().toLocaleDateString("ko-KR")}`
      );
      console.log("TextDocument:", this.textDocument);
      connection.client.register(
        DidChangeConfigurationNotification.type,
        undefined
      );

      const folders = await connection.workspace.getWorkspaceFolders();

      if (folders && folders.length > 0) {
        this.handleDraftConfig(folders.map((folder) => folder.uri));
      }
    });

    connection.onRequest(SelectConfigRequest.type, ({ config }) => {
      const parsedPath = path.parse(config);
      this.draftConfiguration = {
        name: parsedPath.base,
        path: config,
        dir: parsedPath.dir,
      };
    });
  }

  /**
   * 서버 capabilities 정의.
   *
   * @returns ServerCapabilities
   */
  public capabilities(): ServerCapabilities {
    console.log("Capabilities Get");
    return {
      textDocumentSync: TextDocumentSyncKind.Full,
      completionProvider: {
        resolveProvider: false,
        triggerCharacters: ["."],
      },
      hoverProvider: {},
      definitionProvider: true,
      signatureHelpProvider: {
        triggerCharacters: ["(", ",", ")", "="],
      },
      documentSymbolProvider: true,
      workspaceSymbolProvider: true,
      workspace: {
        fileOperations: {
          didCreate: {
            filters: [
              {
                scheme: "file",
                pattern: { glob: "**/*.eps", matches: "file" },
              },
            ],
          },
        },
        workspaceFolders: {
          changeNotifications: true,
        },
      },
      semanticTokensProvider: {
        legend: {
          tokenTypes: Object.keys(TokenType),
          tokenModifiers: tokenModifiers,
        },
        range: false,
        full: {
          delta: false,
        },
      },
    };
  }

  private async getConfiguration(resource: string) {
    return await this.connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "epscript",
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onDidCreateFiles(params: CreateFilesParams) {
    //
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private async onDidChangeConfiguration(params: DidChangeConfigurationParams) {
    //
  }

  private onSignatureHelp(params: SignatureHelpParams) {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.textDocument.uri
    );
    const scopes = this.analyzer.getScopesAtPosition(
      params.textDocument.uri,
      params.position
    );
    const callExpressions = this.analyzer.getRuleAtPosition(
      params.textDocument.uri,
      params.position,
      CallExpressionContext
    );

    if (contextPackage === undefined) return undefined;
    if (!callExpressions) return undefined;

    const scope: BaseScope = scopes
      ? scopes[scopes.length - 1]
      : contextPackage.parsePackage.symbolTable.globalScope;

    const callExpression = callExpressions[callExpressions.length - 1];

    if (!callExpression) return undefined;

    const evaluated = evaluateNode({
      node: callExpression.singleExpression(),
      currentScope: scope,
      diagnostics: [],
      languageManager: this.languageManager,
      symbolTable: contextPackage.parsePackage.symbolTable,
    });

    return provideSingatureHelp(evaluated, callExpressions[0]);
  }

  private onCompletion(params: CompletionParams): CompletionItem[] | undefined {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.textDocument.uri
    );
    const scopes = this.analyzer.getScopesAtPosition(
      params.textDocument.uri,
      params.position
    );
    const singleExpressions = this.analyzer.getSingleExpressionAtPosition(
      params.textDocument.uri,
      params.position
    );

    if (contextPackage === undefined) return undefined;
    if (singleExpressions === null) return undefined;
    const scope: BaseScope = scopes
      ? scopes[scopes.length - 1]
      : contextPackage.parsePackage.symbolTable.globalScope;

    let singleExpression = singleExpressions[0];

    if (singleExpression instanceof CallExpressionContext) {
      singleExpression = singleExpression.singleExpression();
    }

    const evaluated = evaluateNode({
      node: singleExpression,
      currentScope: scope,
      diagnostics: [],
      languageManager: this.languageManager,
      symbolTable: contextPackage.parsePackage.symbolTable,
    });
    return provideCompletion(
      { params: params, contextPackage: contextPackage, name: scope.name },
      scope,
      this.analyzer,
      evaluated,
      singleExpressions[0]
    );
  }

  private onDiagnostic(
    params: TextDocumentChangeEvent<TextDocument>
  ): Diagnostic[] {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.document.uri
    );

    if (contextPackage === undefined) return [];

    return contextPackage.parsePackage.diagnostic;
  }

  private onHover(params: HoverParams): Hover | undefined {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.textDocument.uri
    );

    const scopes = this.analyzer.getScopesAtPosition(
      params.textDocument.uri,
      params.position
    );
    const singleExpressions = this.analyzer.getRuleAtPosition(
      params.textDocument.uri,
      params.position,
      SingleExpressionContext
    );
    const node = this.analyzer.getNodeAtPosition(
      params.textDocument.uri,
      params.position
    );

    if (!contextPackage || !node || !singleExpressions) return undefined;

    const scope: BaseScope = scopes
      ? scopes[scopes.length - 1]
      : contextPackage.parsePackage.symbolTable.globalScope;
    const singleExpression = singleExpressions[singleExpressions.length - 1];
    const r = evaluateNode({
      node: singleExpression,
      currentScope: scope,
      diagnostics: [],
      languageManager: this.languageManager,
      symbolTable: contextPackage.parsePackage.symbolTable,
    });

    return provideHoverItem(
      {
        contextPackage: contextPackage,
        name: node.text,
        params: params,
      },
      this.analyzer,
      r
    );
  }

  private async onDefinition(
    params: DefinitionParams
  ): Promise<Definition | undefined> {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.textDocument.uri
    );

    const scopes = this.analyzer.getScopesAtPosition(
      params.textDocument.uri,
      params.position
    );
    const singleExpressions = this.analyzer.getRuleAtPosition(
      params.textDocument.uri,
      params.position,
      SingleExpressionContext
    );
    const node = this.analyzer.getNodeAtPosition(
      params.textDocument.uri,
      params.position
    );

    if (!contextPackage || !node || !singleExpressions) return undefined;

    const scope: BaseScope = scopes
      ? scopes[scopes.length - 1]
      : contextPackage.parsePackage.symbolTable.globalScope;
    const singleExpression = singleExpressions[singleExpressions.length - 1];
    const r = evaluateNode({
      node: singleExpression,
      currentScope: scope,
      diagnostics: [],
      languageManager: this.languageManager,
      symbolTable: contextPackage.parsePackage.symbolTable,
    });

    // 잘못된 다큐먼트?
    if (node === null || node === undefined) return undefined;
    if (contextPackage !== undefined)
      return await provideDefinition(
        {
          params: params,
          contextPackage,
          name: node.text,
        },
        r
      );
  }

  private async onDocumentSymbol(
    params: DocumentSymbolParams
  ): Promise<DocumentSymbol[] | undefined> {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.textDocument.uri
    );
    if (!contextPackage) return undefined;
    return getDocumentSymbol(contextPackage);
  }

  private async onWorkspaceSymbol(): Promise<SymbolInformation[]> {
    return getWorkspaceSymbol(this.analyzer.documentations);
  }

  /**
   * Handle euddraft config files.
   *
   * Try to find all euddraft config files, in all workspace folders, by glob.
   * @param foldersURI Workspace folder uri
   */
  private handleDraftConfig(foldersURI: string[]) {
    function tryGetDraftConfig(workspaceFolderURI: string) {
      const fsPath = URI.parse(workspaceFolderURI).fsPath;
      const candidates = glob.sync("**/*.{eds,edd}", {
        cwd: fsPath,
        realpath: true,
      });
      return candidates;
    }

    const configs = foldersURI.flatMap((folder) => tryGetDraftConfig(folder));

    if (configs.length === 0) {
      // If there's no config file, the server notify `NoConfigNotification` to client.
      this.connection.sendNotification(NoConfigNotification.method);
    }
    if (configs.length > 1) {
      this.connection.sendRequest(MultipleConfigRequest.type, {
        message: "",
      });
    }

    this.setDraftConfiguration(configs[0]);
  }

  private setDraftConfiguration(configPath: string) {
    const parsedPath = path.parse(configPath);
    this.draftConfiguration = {
      name: parsedPath.base,
      path: configPath,
      dir: parsedPath.dir,
    };
  }
}
