const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "core.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    libraryTarget: "umd"
  },
  mode: "development",
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    publicPath: "http://localhost:3000/dist",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
    // new webpack.ProvidePlugin({
    //   System: "systemjs/dist/system.js"
    // })
  ],
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["@babel/env"] }
      }
    ]
  }
};
