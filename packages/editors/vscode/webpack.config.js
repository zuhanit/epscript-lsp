const withDefaults = require("../../../shared.webpack.config");
const path = require("path");

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
};
console.log(__dirname);
module.exports = withDefaults(clientMain);
