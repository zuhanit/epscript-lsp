const { exec, spawn } = require("child_process");
const { src, dest, series, task, parallel } = require("gulp");
const webpack = require("webpack-stream");
const axios = require("axios");
const webpackClientConfig = require("../packages/editors/vscode/webpack.config");
const webpackServerConfig = require("../packages/server/webpack.config");
const { writeFileSync, writeFile } = require("fs");

const updateeudplib = async () => {
  return exec("git submodule update", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
};

const buildeudplibData = async () => {
  return spawn("python", ["packages/server/src/lib/collector/test.py"], {
    stdio: "inherit",
  });
};

const fetchOffsetData = async () => {
  const response = await axios.get(
    "http://farty1billion.dyndns.org/EUDDB/?api&t=0"
  );
  let data = response.data[1].map((offset) => {
    offset.addr = Number(offset.addr).toString(16).toUpperCase();
    return offset;
  });
  return writeFileSync(
    "packages/server/src/offsets/offset.json",
    JSON.stringify(data)
  );
};

const compileClient = () => {
  return src("packages/editors/vscode/src/extension.ts")
    .pipe(webpack(webpackClientConfig))
    .pipe(dest("packages/editors/vscode/dist"));
};

const compileServer = () => {
  return src("packages/server/src/server.ts")
    .pipe(webpack(webpackServerConfig))
    .pipe(dest("packages/server/dist"));
};

const publish = () => {
  return exec("vsce publish", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
};

task(
  "default",
  series(
    updateeudplib,
    buildeudplibData,
    fetchOffsetData,
    compileServer,
    compileClient
  )
);
task(
  "build",
  series(
    updateeudplib,
    buildeudplibData,
    fetchOffsetData,
    compileServer,
    compileClient
  )
);
task(
  "publish",
  series(updateeudplib, buildeudplibData, compileClient, compileServer, publish)
);
