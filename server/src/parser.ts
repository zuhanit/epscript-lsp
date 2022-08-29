import { CodeCompletionCore } from "antlr4-c3";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { Diagnostic } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { BaseListener } from "./context/listener/BaseListener";
import { epScriptLexer } from "./grammar/src/grammar/lib/epScriptLexer";
import {
  epScriptParser,
  ProgramContext,
} from "./grammar/src/grammar/lib/epScriptParser";

import { Analyzer } from "./analyzer";
import { ContextSymbolTable } from "./context/ContextSymbolTable";
import { ErrorListener } from "./context/listener/ErrorListener";
import { LanguageManager } from "./i18n/LanguageManager";
import { ModuleListener } from "./context/listener/ModuleListener";
export interface ParsePackage {
  symbolTable: ContextSymbolTable;
  core: CodeCompletionCore;
  ast: ProgramContext;
  tokenStream: CommonTokenStream;
  diagnostic: Diagnostic[];
}

export class Parser {
  /* @internal */
  private tokenStream: CommonTokenStream = new CommonTokenStream(
    new epScriptLexer(CharStreams.fromString(""))
  ); // 수정 필요
  private parser: epScriptParser | undefined;

  constructor() {
    this.setText("");
  }

  public static initialize(): Parser {
    const parser = new Parser();
    return parser;
  }

  private setText(document: string) {
    const charStream = CharStreams.fromString(document);
    const lexer = new epScriptLexer(charStream);
    lexer.removeErrorListeners();
    this.tokenStream = new CommonTokenStream(lexer);
  }

  public parse(
    document: TextDocument,
    analyzer: Analyzer,
    languageManager: LanguageManager,
    module: boolean
  ): ParsePackage {
    this.setText(document.getText());
    this.tokenStream.seek(0);
    this.parser = new epScriptParser(this.tokenStream);

    const diagnostics: Diagnostic[] = [];
    const errorListener = new ErrorListener(diagnostics);
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(errorListener);

    const tree = this.parser.program();
    let listener: BaseListener;
    if (module) {
      listener = new ModuleListener(
        this,
        document,
        analyzer,
        diagnostics,
        languageManager,
        this.tokenStream
      );
    } else {
      listener = new BaseListener(
        this,
        document,
        analyzer,
        diagnostics,
        languageManager,
        this.tokenStream
      );
    }
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree);
    return {
      ast: tree,
      core: new CodeCompletionCore(this.parser!),
      symbolTable: listener.symbolTable,
      tokenStream: this.tokenStream,
      diagnostic: diagnostics,
    };
  }
}
