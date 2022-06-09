const webpackClientConfig = require("./client/webpack.config");
const webpackServerConfig = require("./server/webpack.config");

module.exports = [webpackClientConfig, webpackServerConfig];
