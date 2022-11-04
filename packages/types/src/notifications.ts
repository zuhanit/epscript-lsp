import { NotificationType } from "vscode-jsonrpc";

/**
 * The NoConfigRequest is sent from the server to the client to inform
 * the client that no euddraft configuration file.
 */
export namespace NoConfigNotification {
  export const method = "epscript/noConfig" as const;
  export const type = new NotificationType<void>(method);
}
