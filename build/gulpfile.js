const { exec, spawn } = require("child_process");
const { src, dest, series, task, parallel } = require("gulp");
const webpack = require("webpack-stream");
const {
  webpackClientConfig,
  webpackServerConfig,
} = require("../webpack.config");

const updateeudplib = async (cb) => {
  return exec("git submodule update", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};

const buildeudplibData = async (cb) => {
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

task(
  "default",
  series(compileClient, updateeudplib, buildeudplibData, compileServer)
);
task("build", series(compileClient, compileServer));
