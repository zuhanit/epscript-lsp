const withDefaults = require("../../../shared.webpack.config");
const path = require("path");

/**@type {import('webpack').Configuration}*/
const clientMain = {
  context: path.join(__dirname),
  entry: path.resolve(__dirname, "src", "extension.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs",
  },
};
console.log(__dirname)
module.exports = withDefaults(clientMain);
