const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");

const { basePath, publicPath } = require("./webpack.base");

/** @type {webpack.Configuration} */
module.exports = {
  mode: "production",
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new WorkboxPlugin.GenerateSW({
      navigateFallback: path.resolve(publicPath, "index.html"),
      exclude: [/\.DS_STORE$/i, /^CNAME$/i],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/kaykayehnn.herokuapp.com\/russia-wc\/api\/(?:teams|matches).*$/,
          handler: "CacheFirst",
          options: {
            cacheName: "api-responses",
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 365
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "google-fonts-stylesheets"
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts-webfonts",
            expiration: {
              // 1 year
              maxAgeSeconds: 60 * 60 * 24 * 365
            }
          }
        }
      ]
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify(
        "https://kaykayehnn.herokuapp.com/russia-wc"
      )
    })
  ]
};
