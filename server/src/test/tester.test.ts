import { Analyzer } from "../analyzer";
import { Parser } from "../parser";
import { FIXTURES_DOCUMENT, FIXTURES_URI } from "./fixtures";

const parser = Parser.initialize();
const analyzer = new Analyzer(parser);

describe("Class Test", () => {
  // const result = analyzer.analyze(FIXTURES_URI.CLASS, FIXTURES_DOCUMENT.CLASS);
  // console.log(result);
});

describe("Module Test", () => {
  // const result = analyzer.analyze(FIXTURES_URI.MODULE, FIXTURES_DOCUMENT.MODULE);
  // console.log(result);
});
