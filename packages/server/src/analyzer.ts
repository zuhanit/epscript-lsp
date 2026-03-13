import { readFile, readFileSync, existsSync } from "fs";
import * as path from "path";
import { promisify } from "util";
import {
  Connection,
  InitializeParams,
  Position,
  URI,
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI as VSURI } from "vscode-uri";
import { ContextSymbolTable } from "./context/ContextSymbolTable";
import { ContextPackage } from "./context/IContextPackage";
import { BaseScope } from "./context/symbolTable/BaseScope";
import { ModuleResolver, Parser } from "./parser";
import { LanguageManager } from "./i18n/LanguageManager";
import { getEPSPaths } from "./workspace";
import type { Node, Tree } from "web-tree-sitter";

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
    const resolver = this.createModuleResolver(
      document,
      rootDir,
      languageManager,
      module
    );
    const contextPackage: ContextPackage = {
      document: document,
      parsePackage: this.parser.parse(document, resolver),
    };
    this.documentations.set(uri, contextPackage);
    return contextPackage;
  }

  private createModuleResolver(
    document: TextDocument,
    rootDir: string | undefined,
    languageManager: LanguageManager,
    module: boolean
  ): ModuleResolver | undefined {
    // 모듈로 임포트된 파일은 순환 참조를 방지하기 위해 리졸버를 제공하지 않음
    if (module) return undefined;

    return (dottedName: string): ContextSymbolTable | undefined => {
      const dotted = dottedName.split(".");
      const currentPath = path.parse(VSURI.parse(document.uri).fsPath);
      const basePath = rootDir
        ? path.join(rootDir, ...dotted.slice(0, -1), dotted[dotted.length - 1])
        : path.join(
            currentPath.dir,
            "..",
            ...dotted.slice(0, -1),
            dotted[dotted.length - 1]
          );

      if (!existsSync(basePath + ".eps")) return undefined;

      const epsPath = basePath + ".eps";
      const importURI = VSURI.file(epsPath).toString();

      // 캐시 히트
      const cached = this.getContextPackageByURI(importURI);
      if (cached) return cached.parsePackage.symbolTable;

      // 캐시 미스 → 분석 (module=true로 순환 참조 방지)
      const fileContent = readFileSync(epsPath, "utf8");
      const result = this.analyze(
        importURI,
        TextDocument.create(importURI, "eps", 0, fileContent),
        languageManager,
        rootDir,
        true
      );
      return result.parsePackage.symbolTable;
    };
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
   * 현재 포지션에 있는 tree-sitter 노드 얻어오기.
   *
   * @param ast 문서 추상 구문 트리
   * @param position 열려있는 문서 커서의 포지션
   * @returns
   */
  public getNodeAtPosition(ast: Tree, position: Position) {
    const column = Math.max(0, position.character - 1);
    return ast.rootNode.descendantForPosition({
      row: position.line,
      column,
    });
  }

  /**
   * 주어진 위치에서 특정 타입의 가장 가까운 조상 노드를 찾기.
   *
   * @param ast 문서 추상 구문 트리
   * @param position 커서 위치
   * @param nodeType 찾고자 하는 노드 타입
   * @returns 매칭되는 노드 배열
   */
  public getAncestorOfType(
    ast: Tree,
    position: Position,
    nodeType: string
  ): Node[] {
    const node = this.getNodeAtPosition(ast, position);
    if (!node) return [];

    const result: Node[] = [];
    let current: Node | null = node;

    while (current) {
      if (current.type === nodeType) {
        result.push(current);
      }
      current = current.parent;
    }

    return result;
  }

  /**
   * 커서 위치의 expression 노드 찾기.
   *
   * @param ast 문서 추상 구문 트리
   * @param position 커서 위치
   * @returns expression 노드 배열 (가장 안쪽부터)
   */
  public getExpressionAtPosition(ast: Tree, position: Position): Node[] {
    const node = this.getNodeAtPosition(ast, position);
    if (!node) return [];

    const result: Node[] = [];
    let current: Node | null = node;

    while (current) {
      if (isExpressionNode(current)) {
        result.push(current);
      }
      current = current.parent;
    }

    return result;
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
    _character: number,
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
}

const expressionTypes = new Set([
  "call_expression",
  "member_expression",
  "subscript_expression",
  "identifier",
  "binary_expression",
  "ternary_expression",
  "unary_expression",
  "update_expression",
  "number",
  "string",
  "array",
  "parenthesized_expression",
  "lambda_expression",
  "this",
  "true",
  "false",
]);

function isExpressionNode(node: Node): boolean {
  return expressionTypes.has(node.type);
}
