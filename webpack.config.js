//@ts-check

"use strict";

const path = require("path");
const webpack = require("webpack");

/**@type {import('webpack').Configuration}*/
const clientMain = {
  context: path.join(__dirname, "client", "src"),
  target: "node",
  mode: "none",
  node: {
    __dirname: false,
  },
  entry: path.resolve(__dirname, "client", "src", "extension.ts"),
  output: {
    path: path.resolve(__dirname, "client", "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs",
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

/**@type {import('webpack').Configuration}*/
const serverMain = {
  context: path.join(__dirname, "server", "src"),
  target: "node",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "server", "dist"),
    filename: "server.js",
    libraryTarget: "commonjs",
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode",
  },
  entry: path.resolve(__dirname, "server", "src", "server.ts"),
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

module.exports = {
  webpackClientConfig: clientMain,
  webpackServerConfig: serverMain,
};
