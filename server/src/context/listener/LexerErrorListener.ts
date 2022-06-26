import {
  ANTLRErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from "antlr4ts";
import { Diagnostic } from "vscode-languageserver";

export class LexerErrorListener implements ANTLRErrorListener<number> {
  public constructor(private errorList: Diagnostic[]) {}

  public syntaxError<T extends number>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    const error: Diagnostic = {
      message: msg,
      range: {
        start: {
          character: charPositionInLine,
          line: line,
        },
        end: {
          character: charPositionInLine + 1,
          line: line,
        },
      },
    };

    this.errorList.push(error);
  }
}
