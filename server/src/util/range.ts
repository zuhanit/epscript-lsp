import { ParserRuleContext } from "antlr4ts";
import { Range } from "vscode-languageserver";

export const zeroRange: Range = {
  start: {
    line: 0,
    character: 0,
  },
  end: {
    line: 0,
    character: 0,
  },
};

/**
 * 컨텍스트로부터 `Range` 얻어오기.
 *
 * @param ctx 파서 컨텍스트
 * @returns Range
 */
export function getRangeByContext(ctx: ParserRuleContext): Range {
  const result: Range = {
    start: {
      line: ctx.start.line - 1,
      character: ctx.start.charPositionInLine,
    },
    end: {
      line: ctx.stop!.line - 1,
      character:
        ctx.stop!.charPositionInLine +
        ctx.stop!.stopIndex -
        ctx.stop!.startIndex,
    },
  };
  return result;
}
