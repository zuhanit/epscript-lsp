import {
  commands,
  ExtensionContext,
  window,
  workspace,
  languages,
  LanguageStatusItem,
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
import { MultipleConfigRequest } from "@epscript-lsp/types/src/requests";
import { NoConfigNotification } from "@epscript-lsp/types/src/notifications";
import { OpenConfig } from "./commands";
export class EPSClient extends LanguageClient {
  constructor(
    name: string,
    serverOptions: ServerOptions,
    clientOptions: LanguageClientOptions
  ) {
    super(name, serverOptions, clientOptions);
  }

  public static create(context: ExtensionContext): LanguageClient {
    const client = new EPSClient(
      "epScript",
      EPSClient.createServerOptions(context.extensionPath),
      EPSClient.createClientOptions()
    );

    const offsetManager = new OffsetManager();
    const buildManager = new BuildManager();
    const configStatus = new ConfigStatus();

    context.subscriptions.push(configStatus.statusItem);

    client.onNotification(NoConfigNotification.type, () => {
      window.showWarningMessage(
        [
          "",
          "No euddraft configuration (ex: main.edd) found.",
          "User experience will be downgraded. Please write euddraft config file (e.g *.(eds|edd)) in the workspace folder.",
          "Alternativley you can disable eps-server by executing the 'Disable eps-server' command.",
        ].join("\n")
      );
    });

    client.onRequest(MultipleConfigRequest.type, async () => {
      await window.showWarningMessage(
        [
          "Multiple euddraft configration files found.",
          "Please select one of configuration file.",
        ].join("\n")
      );
      await commands.executeCommand<string | undefined>(
        OpenConfig.Command.command
      );
      return {};
    });

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
      ),
      commands.registerCommand("epscript.openConfig", () =>
        OpenConfig.Exec(client)
      ),
      commands.registerCommand("epscript.disable", () => client.stop()),
      commands.registerCommand("epscript.restart", () => client.restart())
    );

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
      synchronize: {
        fileEvents: [workspace.createFileSystemWatcher("**/*.{eds,edd}")],
      },
    };
  }

  private updateStatusBar() {
    //
  }
}
class ConfigStatus {
  public statusItem: LanguageStatusItem;

  constructor() {
    this.statusItem = languages.createLanguageStatusItem(
      "epscript.version",
      "epscript"
    );

    this.statusItem.name = "0.9.8.1";
    this.statusItem.command = OpenConfig.Command;
  }
}
