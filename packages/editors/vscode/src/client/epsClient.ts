import {
  commands,
  ExtensionContext,
  window,
  workspace,
  WorkspaceFolder,
} from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";
import path from "path";
import { OffsetManager } from "./offsetManager";
import { BuildManager, BuildScript } from "./buildManager";

export class EPSClient {
  public static create(context: ExtensionContext): LanguageClient {
    const client = new LanguageClient(
      "epScript",
      EPSClient.createServerOptions(context.extensionPath),
      EPSClient.createClientOptions()
    );

    const workspaceFolder = workspace.workspaceFolders;
    if (workspaceFolder) {
      const workspaces: WorkspaceFolder[] = workspaceFolder.map((x) => {
        return {
          index: x.index,
          name: x.name,
          uri: x.uri,
        };
      });
      const offsetManager = new OffsetManager();
      const buildManager = new BuildManager(workspaces);

      context.subscriptions.push(
        window.registerTreeDataProvider("euddraftBuild", buildManager),
        commands.registerCommand("euddraftBuild.refresh", () =>
          buildManager.refresh()
        ),
        commands.registerCommand("euddraftBuild.run", (node: BuildScript) =>
          buildManager.build(node)
        ),
        commands.registerCommand("euddraftBuild.edit", (node: BuildScript) =>
          buildManager.edit(node)
        ),
        commands.registerTextEditorCommand("epscript.offsets", async (editor) =>
          offsetManager.main(editor)
        )
      );
    }
    console.log("[eps-server] Client Loaded.");

    return client;
  }

  public static createServerOptions(extensionPath: string): ServerOptions {
    const serverModule = path.join(extensionPath, "dist", "server.js");
    const debugArgv = ["--nolazy", "--inspect=6009"];

    return {
      run: {
        module: serverModule,
        transport: TransportKind.ipc,
      },
      debug: {
        module: serverModule,
        transport: TransportKind.ipc,
        options: {
          execArgv: debugArgv,
        },
      },
    };
  }
  public static createClientOptions(): LanguageClientOptions {
    return {
      documentSelector: [
        { scheme: "file", language: "epscript" },
        { scheme: "untitled", language: "epscript" },
      ],
    };
  }
}
