/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { ExtensionContext } from "vscode";

import { LanguageClient } from "vscode-languageclient/node";
import { EPSClient } from "./client/epsClient";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  const client = EPSClient.create(context);
  client
    .start()
    .catch((err) => client.error("Starting client failed.", err, "force"));
}

export function deactivate(): Thenable<void> | undefined {
  console.log("[eps-server] Client deativated.");
  if (!client) {
    return undefined;
  }
  return client.stop();
}
