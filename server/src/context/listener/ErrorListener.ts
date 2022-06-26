import {
  ANTLRErrorListener,
  Recognizer,
  RecognitionException,
  Token,
  CommonToken,
  ParserErrorListener,
} from "antlr4ts";
import { Override } from "antlr4ts/Decorators";
import { Diagnostic } from "vscode-languageserver";

export class ErrorListener implements ParserErrorListener {
  constructor(private diagnostics: Diagnostic[]) {}

  syntaxError<T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    const error: Diagnostic = {
      message: msg,
      range: {
        start: {
          character: charPositionInLine,
          line: line - 1,
        },
        end: {
          character: charPositionInLine + 1,
          line: line - 1,
        },
      },
    };

    if (offendingSymbol) {
      error.range.end.character =
        charPositionInLine +
        offendingSymbol.stopIndex -
        offendingSymbol.startIndex +
        1;
    }

    this.diagnostics.push(error);
  }
}
