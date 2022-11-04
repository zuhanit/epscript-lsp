import { RequestType } from "vscode-jsonrpc";

export type MultipleConfigParams = {
  message: string;
};

export type MultipleConfigResult = {
  //
};

/**
 * The MultipleConfigRequest is sent from the server to the client to inform
 * the client that have multiple euddraft configuration file.
 *
 * Since euddraft has no default config file(ex: package.json, cargo.toml), the
 * server collects all euddraft files.
 */
export namespace MultipleConfigRequest {
  export const method = "epscript/multipleConfig" as const;
  export const type = new RequestType<
    MultipleConfigParams,
    MultipleConfigResult,
    void
  >(method);
}

export type SelectConfigParams = {
  config: string;
};

export namespace SelectConfigRequest {
  export const method = "epscript/selectConfig" as const;
  export const type = new RequestType<SelectConfigParams, void, void>(method);
}
