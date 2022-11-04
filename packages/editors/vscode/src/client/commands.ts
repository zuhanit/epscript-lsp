import { SelectConfigRequest } from "@epscript-lsp/types/src/requests";
import { glob } from "glob";
import { Command, window, workspace } from "vscode";
import { EPSClient } from "./epsClient";
import path from "path";
export namespace OpenConfig {
  export const Command: Command = {
    command: "epscript.openConfig",
    title: "Select config file",
  };
  export const Exec = async (client: EPSClient) => {
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
        await client.sendRequest(SelectConfigRequest.type, {
          config: pick,
        });
        client.configStatus.statusItem.text = path.parse(pick).base;
        return pick;
      } else {
        void window.showErrorMessage(
          ["", "No workspace folder found."].join("\n")
        );
      }
    }
  };
}
