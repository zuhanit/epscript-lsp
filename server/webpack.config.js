const withDefaults = require("../shared.webpack.config");
const path = require("path");

/**@type {import('webpack').Configuration}*/
const serverMain = {
  context: path.join(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    libraryTarget: "commonjs",
  },
  entry: path.resolve(__dirname, "src", "server.ts"),
};

module.exports = withDefaults(serverMain);
