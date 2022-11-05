import { ParserRuleContext } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { readFile } from "fs";
import { promisify } from "util";
import { Connection, InitializeParams, URI } from "vscode-languageserver";
import { Position, TextDocument } from "vscode-languageserver-textdocument";
import { URI as VSURI } from "vscode-uri";
import { ContextSymbolTable } from "./context/ContextSymbolTable";
import { ContextPackage } from "./context/IContextPackage";
import { BaseScope } from "./context/symbolTable/BaseScope";
import { SingleExpressionContext } from "./grammar/lib/epScriptParser";
import { LanguageManager } from "./i18n/LanguageManager";
import { Parser } from "./parser";
import { getEPSPaths } from "./workspace";

const readFileAsync = promisify(readFile);
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
    languageManager: LanguageManager,
    rootDir?: string,
    module = false
  ): ContextPackage {
    const contextPackage: ContextPackage = {
      document: document,
      parsePackage: this.parser.parse(
        document,
        this,
        languageManager,
        module,
        rootDir
      ),
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

  /**
   * Get `ParserRuleContext` in position.
   *
   * @param ast
   * @param position
   * @param rule
   * @param filter
   * @returns
   */
  public getRuleAtPosition<T extends ParserRuleContext>(
    ast: ParserRuleContext,
    position: Position,
    rule: new (...args: any[]) => T,
    filter?: (value: any, index?: number, Array?: any[]) => boolean
  ) {
    return this.ruleFromPosition(
      ast,
      position.character,
      position.line + 1,
      rule,
      filter
    );
  }

  private ruleFromPosition<T extends ParserRuleContext>(
    root: ParseTree,
    character: number,
    line: number,
    rule: new (...args: any[]) => T,
    filter?: (value: any, index?: number, Array?: any[]) => boolean
  ) {
    const result: T[] = [];

    if (root instanceof rule) {
      if (
        root.start.line <= line &&
        root.stop &&
        root.stop.line >= line &&
        root.stop.charPositionInLine >= character
      ) {
        result.push(root);
      }
    }
    const context = root as ParserRuleContext;

    if (context.children) {
      context.children.forEach((x) => {
        result.push(...this.ruleFromPosition(x, character, line, rule));
      });
    }

    if (filter) return result.filter(filter);
    return result;
  }

  /**
   * Get single `ParserRuleContext` in position.
   *
   * _Single_ is `ParserRuleContext` that has same `start` and `stop` token. In this case,
   * analyzer try to find token by text length.
   * @param ast
   * @param position
   * @param rule
   * @param filter
   * @returns
   */
  public getSingleRuleAtPosition<T extends ParserRuleContext>(
    ast: ParserRuleContext,
    position: Position,
    rule: new (...args: any[]) => T,
    filter?: (value: any, index?: number, Array?: any[]) => boolean
  ) {
    return this.singleRuleFromPosition(
      ast,
      position.character,
      position.line + 1,
      rule,
      filter
    );
  }

  private singleRuleFromPosition<T extends ParserRuleContext>(
    root: ParseTree,
    character: number,
    line: number,
    rule: new (...args: any[]) => T,
    filter?: (value: any, index?: number, Array?: any[]) => boolean
  ) {
    const result: T[] = [];

    if (root instanceof rule) {
      if (
        root.start.line == line &&
        root.start.charPositionInLine <= character &&
        root.start.charPositionInLine + root.text.length >= character
      ) {
        result.push(root);
      }
    }
    const context = root as ParserRuleContext;

    if (context.children) {
      context.children.forEach((x) => {
        result.push(...this.singleRuleFromPosition(x, character, line, rule));
      });
    }

    if (filter) return result.filter(filter);
    return result;
  }

  public getSingleExpressionAtPosition(
    ast: ParserRuleContext,
    position: Position,
    filter?: (value: any, index?: number, Array?: any[]) => boolean
  ) {
    return this.ruleFromPosition(
      ast,
      position.character,
      position.line + 1,
      SingleExpressionContext,
      filter
    );
  }

  /**
   * 현재 포지션에 있는 ANTLR 노드 얻어오기.
   *
   * @param ast 문서 추상 구문 트리
   * @param position 열려있는 문서 커버의 포지션
   * @returns
   */
  public getNodeAtPosition(ast: ParserRuleContext, position: Position) {
    return this.parseTreeFromPosition(
      ast,
      position.character,
      position.line + 1
    );
  }

  /**
   * 포지션을 포함하고 있는 스코프 배열 얻어오기.
   *
   * @param symbolTable 문서 심볼 테이블
   * @param position 열려있는 문서 커서의 포지션
   * @returns
   */
  public getScopesAtPosition(
    symbolTable: ContextSymbolTable,
    position: Position
  ) {
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
