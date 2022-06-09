//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

"use strict";

const merge = require("merge-options");

const withDefaults = (/**@type WebpackConfig*/ extConfig) => {
  /** @type WebpackConfig */
  let defaultConfig = {
    target: "node",
    mode: "none",
    node: {
      __dirname: false,
    },
    devtool: "source-map",
    externals: {
      vscode: "commonjs vscode",
    },
    resolve: {
      mainFields: ["module", "main"],
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
      ],
    },
  };
  return merge(extConfig, defaultConfig);
};

module.exports = withDefaults;
