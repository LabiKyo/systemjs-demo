const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "pluginA.bundle.js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    jsonpFunction: "pluginAJsonp"
  },
  mode: "development"
};
