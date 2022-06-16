import { ParserRuleContext } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { readFile, readFileSync } from "fs";
import { Glob, glob } from "glob";
import { Context } from "mocha";
import { promisify } from "util";
import {
  Connection,
  InitializeParams,
  URI,
  WorkspaceFolder,
} from "vscode-languageserver";
import { Position, TextDocument } from "vscode-languageserver-textdocument";
import { URI as VSURI } from "vscode-uri";
import { ContextSymbolTable } from "./context/ContextSymbolTable";
import { ContextPackage } from "./context/IContextPackage";
import { BaseScope } from "./context/symbolTable/BaseScope";
import { SymbolTable } from "./context/symbolTable/SymbolTable";
import { SingleExpressionContext } from "./grammar/src/grammar/lib/epScriptParser";
import { LanguageManager } from "./i18n/LanguageManager";
import { Parser } from "./parser";
import { getEPSPaths } from "./workspace";

const readFileAsync = promisify(readFile);
type FolderPath = string;
/**
 * 문서 정리 프로그램.
 */
export class Analyzer {
  /**
   * 클라이언트에 열려있는 문서 패키지.
   */
  public documentations = new Map<URI, ContextPackage>();
  public parser: Parser;

  constructor(parser: Parser) {
    this.parser = parser;
  }

  /**
   * 분석기 초기화 및 호출.
   *
   * @returns Analyzer
   */
  public static async initialize(
    connection: Connection,
    params: InitializeParams,
    parser: Parser,
    languageManager: LanguageManager
  ): Promise<Analyzer> {
    console.log("Analyzer Initialized");
    console.log("I got those workspaceFolders: ", params.workspaceFolders);
    const analyzer = new Analyzer(parser);
    params.workspaceFolders?.forEach(async (folder) => {
      let filePaths: string[] = [];
      const folderPath = VSURI.parse(folder.uri).fsPath;

      try {
        filePaths = await getEPSPaths(folderPath);
      } catch (err) {
        console.log(
          "Analyzer initializing failed while get epScript files. reason: ",
          err
        );
      }

      filePaths.forEach(async (file) => {
        const fileUri = folder.uri + "/" + file;
        const path = folderPath + "\\" + file;
        const content = await readFileAsync(path, "utf8");

        analyzer.analyze(
          fileUri,
          TextDocument.create(fileUri, "eps", 0, content),
          languageManager
        );
      });
    });

    return analyzer;
  }

  /**
   * 문서 내용 분석하기.
   *
   * @param uri 문서 URI
   * @param document 문서 TextDocument
   * @returns ContextPackage
   */
  public analyze(
    uri: URI,
    document: TextDocument,
    languageManager: LanguageManager
  ): ContextPackage {
    const contextPackage: ContextPackage = {
      document: document,
      parsePackage: this.parser.parse(document, this, languageManager),
    };
    this.documentations.set(uri, contextPackage);
    return contextPackage;
  }

  /**
   * URI를 통해 `ContextPackage` 얻어오기.
   *
   * @param uri 얻어올 문서의 URI
   * @returns ContextPackage
   */
  public getContextPackageByURI(uri: URI) {
    return this.documentations.get(uri);
  }

  public getSingleExpressionAtPosition(uri: URI, position: Position) {
    const ast = this.getContextPackageByURI(uri)?.parsePackage.ast;
    if (ast === undefined) return null;
    return this.singleExpressionFromPosition(
      ast,
      position.character,
      position.line + 1
    );
  }

  private singleExpressionFromPosition(
    root: ParseTree,
    character: number,
    line: number
  ): SingleExpressionContext[] {
    const result: SingleExpressionContext[] = [];

    if (root instanceof SingleExpressionContext) {
      if (root.start.line <= line && root.stop && root.stop.line >= line) {
        result.push(root);
      }
    } else {
      const context = root as ParserRuleContext;

      if (context.children) {
        context.children.forEach((x) => {
          result.push(...this.singleExpressionFromPosition(x, character, line));
        });
      }
    }

    return result;
  }

  /**
   * 현재 포지션에 있는 ANTLR 노드 얻어오기.
   *
   * @param uri 문서 URI
   * @param position 열려있는 문서 커버의 포지션
   * @returns
   */
  public getNodeAtPosition(uri: URI, position: Position) {
    const ast = this.getContextPackageByURI(uri)?.parsePackage.ast;
    if (ast === undefined) return null;
    return this.parseTreeFromPosition(
      ast,
      position.character,
      position.line + 1
    );
  }

  /**
   * 포지션을 포함하고 있는 스코프 배열 얻어오기.
   *
   * @param uri 문서 URI
   * @param position 열려있는 문서 커서의 포지션
   * @returns
   */
  public getScopesAtPosition(uri: URI, position: Position) {
    const symbolTable =
      this.getContextPackageByURI(uri)?.parsePackage.symbolTable;
    if (symbolTable === undefined) return undefined;

    return this.scopesFromPosition(
      symbolTable,
      position.character,
      position.line
    );
  }

  public scopesFromPosition(
    symbolTable: ContextSymbolTable,
    character: number,
    line: number
  ): BaseScope[] | undefined {
    const scopes = symbolTable.globalScope
      .getAllSymbols()
      .filter<BaseScope>(BaseScope.isBaseScope)
      .filter(
        (x) => x.blockRange.start.line <= line && x.blockRange.end.line >= line
      );

    if (scopes.length === 0) return undefined;
    return scopes;
  }

  public parseTreeFromPosition = (
    root: ParseTree,
    column: number,
    row: number
  ): ParseTree | undefined => {
    // Does the root node actually contain the position? If not we don't need to look further.
    if (root instanceof TerminalNode) {
      const terminal = root;
      const token = terminal.symbol;
      if (token.line !== row) {
        return undefined;
      }

      const tokenStop =
        token.charPositionInLine + (token.stopIndex - token.startIndex + 1);
      if (token.charPositionInLine <= column && tokenStop >= column) {
        return terminal;
      }

      return undefined;
    } else {
      const context = root as ParserRuleContext;
      if (!context.start || !context.stop) {
        // Invalid tree?
        return undefined;
      }

      if (
        context.start.line > row ||
        (context.start.line === row &&
          column < context.start.charPositionInLine)
      ) {
        return undefined;
      }

      const tokenStop =
        context.stop.charPositionInLine +
        (context.stop.stopIndex - context.stop.startIndex + 1);
      if (
        context.stop.line < row ||
        (context.stop.line === row && tokenStop < column)
      ) {
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
}
