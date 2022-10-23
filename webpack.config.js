const webpackClientConfig = require("./packages/editors/vscode/webpack.config");
const webpackServerConfig = require("./packages/server/webpack.config");

module.exports = [webpackClientConfig, webpackServerConfig];
