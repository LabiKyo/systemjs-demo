const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "pluginB.bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system"
  },
  mode: "development"
};
