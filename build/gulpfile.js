const { exec, spawn } = require("child_process");
const { src, dest, series, task, parallel } = require("gulp");
const webpack = require("webpack-stream");
const webpackClientConfig = require("../client/webpack.config");
const webpackServerConfig = require("../server/webpack.config");

const updateeudplib = async () => {
  return exec("git submodule update", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
};

const buildeudplibData = async () => {
  return spawn("python", ["server/src/lib/collector/test.py"], {
    stdio: "inherit",
  });
};

const compileClient = () => {
  return src("client/src/extension.ts")
    .pipe(webpack(webpackClientConfig))
    .pipe(dest("client/dist"));
};

const compileServer = () => {
  return src("server/src/server.ts")
    .pipe(webpack(webpackServerConfig))
    .pipe(dest("server/dist"));
};

const publish = () => {
  return exec("vsce publish", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
};

task(
  "default",
  series(compileClient, updateeudplib, buildeudplibData, compileServer)
);
task("build", series(compileClient, compileServer));
task("publish", series(compileClient, compileServer, publish));
