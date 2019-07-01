const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const basePath = path.resolve(__dirname, "..");

/** @type {webpack.Configuration} */
const baseConfig = {
  context: basePath,
  entry: "./src/index.js",
  output: {
    path: path.resolve(basePath, "dist"),
    filename: "bundle.js",
    publicPath: process.env.PUBLIC_PATH || "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      moment$: path.join(basePath, "node_modules/moment/min/moment.min.js")
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(basePath, "public/index.html")
    }),
    new CopyWebpackPlugin([
      { from: path.join(basePath, "public/"), to: path.join(basePath, "dist") }
    ]),
    new webpack.DefinePlugin({
      "process.env.PUBLIC_PATH": JSON.stringify(process.env.PUBLIC_PATH || "/")
    })
  ]
};

module.exports = {
  baseConfig,
  basePath
};
