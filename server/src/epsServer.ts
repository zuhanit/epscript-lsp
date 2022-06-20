/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { TextDocument } from "vscode-languageserver-textdocument";
import {
  TextDocuments,
  Diagnostic,
  InitializeParams,
  CompletionItem,
  TextDocumentSyncKind,
  Connection,
  ServerCapabilities,
  HoverParams,
  DefinitionParams,
  CompletionParams,
  CancellationToken,
  Hover,
  Definition,
  TextDocumentChangeEvent,
  DidChangeConfigurationParams,
  CreateFilesParams,
  DidChangeConfigurationNotification,
  InitializeResult,
  SignatureHelpParams,
} from "vscode-languageserver/node";

import { Analyzer } from "./analyzer";
import { BaseScope } from "./context/symbolTable/BaseScope";
import { provideCompletion } from "./document/completion";
import { provideDefinition } from "./document/definition";
import { provideHoverItem } from "./document/hover";
import { LanguageManager } from "./i18n/LanguageManager";
import { Parser } from "./parser";
import { URI } from "vscode-uri";
import * as path from "path";
import { provideSingatureHelp } from "./document/signatureHelp";
import { evaluateNode } from "./context/evaluator/evaluator";
import { CallExpressionContext } from "./grammar/src/grammar/lib/epScriptParser";

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
          this.languageManager
        );
      } else {
        this.analyzer.analyze(
          change.document.uri,
          change.document,
          this.languageManager
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
    connection.workspace.onDidCreateFiles((params) =>
      this.onDidCreateFiles(params)
    );
    connection.onCompletion(
      (params: CompletionParams, token: CancellationToken) =>
        this.onCompletion(params)
    );
    connection.onHover((params: HoverParams) => this.onHover(params));
    connection.onDefinition((params: DefinitionParams) =>
      this.onDefinition(params)
    );
    connection.onSignatureHelp((params: SignatureHelpParams) =>
      this.onSignatureHelp(params)
    );
    connection.onDidChangeConfiguration(
      (params: DidChangeConfigurationParams) =>
        this.onDidChangeConfiguration(params)
    );
    connection.onInitialized(async () => {
      console.log(
        `Server Initialized at ${new Date().toLocaleDateString("ko-KR")}`
      );
      console.log("TextDocument:", this.textDocument);
      connection.client.register(
        DidChangeConfigurationNotification.type,
        undefined
      );
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
        triggerCharacters: ["(", ",", "="],
      },
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
    };
  }

  private async getConfiguration(resource: string) {
    return await this.connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "epscript",
    });
  }

  private onDidCreateFiles(params: CreateFilesParams) {
    params.files.forEach((file) => {
      const folderURI = URI.file(path.parse(URI.parse(file.uri).fsPath).dir);
      // this.analyzer.analyze(params.)
    });
  }

  private async onDidChangeConfiguration(params: DidChangeConfigurationParams) {
    const result = await this.getConfiguration("diagnostics");
  }

  private onSignatureHelp(params: SignatureHelpParams) {
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
    return provideSingatureHelp(
      { params: params, contextPackage: contextPackage, name: "" },
      evaluated,
      singleExpressions[0]
    );
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
    const singleExpressions = this.analyzer.getSingleExpressionAtPosition(
      params.textDocument.uri,
      params.position
    );
    const node = this.analyzer.getNodeAtPosition(
      params.textDocument.uri,
      params.position
    );

    if (!contextPackage || !node || !singleExpressions) return undefined;

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

    return provideHoverItem(
      { contextPackage: contextPackage, name: node.text, params: params },
      evaluated
    );
  }

  private async onDefinition(
    params: DefinitionParams
  ): Promise<Definition | undefined> {
    const contextPackage = this.analyzer.getContextPackageByURI(
      params.textDocument.uri
    );
    const node = this.analyzer.getNodeAtPosition(
      params.textDocument.uri,
      params.position
    );

    // 잘못된 다큐먼트?
    if (node === null || node === undefined) return undefined;
    if (contextPackage !== undefined)
      return await provideDefinition({
        params: params,
        contextPackage,
        name: node.text,
      });
  }
}
