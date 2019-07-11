const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const basePath = path.resolve(__dirname, "..");
const publicPath = process.env.PUBLIC_PATH || "/";

/** @type {webpack.Configuration} */
const baseConfig = {
  context: basePath,
  entry: "./src/index.js",
  output: {
    path: path.resolve(basePath, "dist"),
    filename: "bundle.js",
    publicPath
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
    new HTMLWebpackPlugin({
      template: path.join(basePath, "public/index.html"),
      filename: "404.html"
    }),
    new CopyWebpackPlugin([
      { from: path.join(basePath, "public/"), to: path.join(basePath, "dist") }
    ]),
    new webpack.DefinePlugin({
      "process.env.PUBLIC_PATH": JSON.stringify(publicPath)
    })
  ]
};

module.exports = {
  baseConfig,
  basePath,
  publicPath
};
