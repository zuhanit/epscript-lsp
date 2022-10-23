import { CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { Block, parse } from "comment-parser";
import { epScriptLexer } from "../grammar/lib/epScriptLexer";

export const getDocumentationSpec = (blocks: Block[]) => {
  const description: string[] = [];
  const tags: string[] = [];

  blocks.map((block) => {
    description.push(block.description);
    block.tags.forEach((tag) => {
      tags.push(
        [`_@${tag.tag}_`, `\`${tag.name}\``, "—", tag.description].join(" ")
      );
    });
  });

  return description.join("") + "\n\n" + tags.join("\n");
};

export const getDocumentation = (
  ctx: ParserRuleContext,
  tokenStream: CommonTokenStream
): string | undefined => {
  const previousTokenIndex = ctx.start.tokenIndex - 1;
  if (previousTokenIndex >= 0) {
    const previousToken = tokenStream.get(previousTokenIndex);
    if (previousToken.type === epScriptLexer.DocComment && previousToken.text) {
      const parsedDoc = parse(previousToken.text);
      return getDocumentationSpec(parsedDoc);
    }
  }

  return undefined;
};
