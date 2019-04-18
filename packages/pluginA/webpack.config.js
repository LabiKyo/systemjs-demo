const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "pluginA.bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system"
  },
  mode: "development"
};
