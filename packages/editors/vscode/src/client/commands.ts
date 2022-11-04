import { SelectConfigRequest } from "@epscript-lsp/types/src/requests";
import { glob } from "glob";
import { Command, window, workspace } from "vscode";
import { LanguageClient } from "vscode-languageclient/node";

export namespace OpenConfig {
  export const Command: Command = {
    command: "epscript.openConfig",
    title: "Select config file",
  };
  export const Exec = async (client: LanguageClient) => {
    const workspaceFolders = workspace.workspaceFolders;

    if (workspaceFolders) {
      const configFiles = workspaceFolders.flatMap((folder) =>
        glob.sync("**/*.{eds,edd}", { cwd: folder.uri.fsPath, realpath: true })
      );
      const pick = await window.showQuickPick(configFiles, {
        placeHolder: "Select euddraft config file.",
      });
      if (pick) {
        // Inform picked config to the server.
        client.sendRequest(SelectConfigRequest.type, {
          config: pick,
        });
        return pick;
      } else {
        void window.showErrorMessage(
          ["", "No workspace folder found."].join("\n")
        );
      }
    }
  };
}
