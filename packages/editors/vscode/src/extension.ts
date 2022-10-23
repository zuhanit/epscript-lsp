/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from "path";
import {
  workspace,
  ExtensionContext,
  window,
  WorkspaceFolder,
  commands,
} from "vscode";

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";
import { BuildManager, BuildScript } from "./client/buildManager";
import { OffsetManager } from "./client/offsetManager";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  // The server is implemented in node
  const serverModule = context.asAbsolutePath(
    path.join("packages", "server", "dist", "server.js")
  );
  // The debug options for the server
  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
  const debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      { scheme: "file", language: "epscript" },
      { scheme: "untitled", language: "epscript" },
    ],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "epScriptLanguageClient",
    "epScript Language Client",
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();
  const workspaceFolder = workspace.workspaceFolders;
  if (workspaceFolder) {
    const workspaces: WorkspaceFolder[] = workspaceFolder.map(
      (x) => {
        return {
          index: x.index,
          name: x.name,
          uri: x.uri,
        };
      }
    );
    const offsetManager = new OffsetManager();
    const buildManager = new BuildManager(workspaces);
    window.registerTreeDataProvider("euddraftBuild", buildManager);
    commands.registerCommand("euddraftBuild.refresh", () =>
      buildManager.refresh()
    );
    commands.registerCommand("euddraftBuild.run", (node: BuildScript) =>
      buildManager.build(node)
    );
    commands.registerCommand("euddraftBuild.edit", (node: BuildScript) =>
      buildManager.edit(node)
    );
    commands.registerTextEditorCommand("epscript.offsets", async (editor) =>
      offsetManager.main(editor)
    );
  }
  console.log("[eps-server] Client Loaded.");
}

export function deactivate(): Thenable<void> | undefined {
  console.log("[eps-server] Client deativated.");
  if (!client) {
    return undefined;
  }
  return client.stop();
}
