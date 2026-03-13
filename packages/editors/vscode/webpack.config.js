const withDefaults = require("../../../shared.webpack.config");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/**@type {import('webpack').Configuration}*/
const clientMain = {
  context: path.join(__dirname),
  entry: {
    extension: "./src/extension.ts",
    server: "./src/server.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../../../node_modules/web-tree-sitter/web-tree-sitter.wasm"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "../../../node_modules/tree-sitter-epscript/tree-sitter-epscript.wasm"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
};
console.log(__dirname);
module.exports = withDefaults(clientMain);
