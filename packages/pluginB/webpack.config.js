const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "pluginB.bundle.js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    jsonpFunction: "pluginBJsonp"
  },
  mode: "development"
};
