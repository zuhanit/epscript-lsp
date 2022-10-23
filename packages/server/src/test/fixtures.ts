import { readFileSync } from "fs";
import * as path from "path";
import { URI } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

export const FIXTURE_FOLDER = path.join(__dirname, "./testFixture/");

export function getDocument(uri: URI) {
  return TextDocument.create(
    uri,
    "eps",
    1,
    readFileSync(uri.replace("file://", ""), "utf8")
  );
}

export const FIXTURES_URI = {
  CLASS: `file://${path.join(FIXTURE_FOLDER, "class.eps")}`,
  MODULE: `file://${path.join(FIXTURE_FOLDER, "import-parent.eps")}`,
};

export const FIXTURES_DOCUMENT = {
  CLASS: getDocument(FIXTURES_URI.CLASS),
  MODULE: getDocument(FIXTURES_URI.MODULE),
};
