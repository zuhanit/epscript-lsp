const { exec, spawn } = require("child_process");
const { src, dest, series, task, parallel } = require("gulp");
const webpack = require("webpack-stream");
const axios = require("axios");
const webpackClientConfig = require("../packages/editors/vscode/webpack.config");
const webpackServerConfig = require("../packages/server/webpack.config");
const { writeFileSync, writeFile } = require("fs");

const updateeudplib = () => {
  const app = spawn("python", ["packages/server/src/lib/collector/update.py"]);
  app.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  let stderrChunks = [];
  app.stderr.on("data", (data) => {
    stderrChunks = stderrChunks.concat(data);
  });
  app.stderr.on("end", () => {
    const stderrContent = Buffer.concat(stderrChunks).toString();
    console.log(stderrContent);
    throw new Error("Error caused while update eudplib, err:", stderrContent);
  });
  return app;
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
  return exec(
    "cd packages/editors/vscode && vsce publish",
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
    }
  );
};

const updateVersion = () => {
  return Promise.all([
    exec("yarn version --patch"),
    exec("cd packages/editors/vscode && yarn version --patch"),
    exec("cd packages/server && yarn version --patch"),
  ]);
};

task(
  "default",
  series(updateeudplib, fetchOffsetData, compileServer, compileClient)
);
task("build", series(updateeudplib, compileServer, compileClient));
task(
  "update",
  series(updateeudplib, compileClient, compileServer, updateVersion)
);
