const webpack = require("webpack");

const { baseConfig, publicPath } = require("./webpack.base");

/** @type {webpack.Configuration} */
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:9000"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ["env", "react"],
          plugins: [
            "react-hot-loader/babel",
            "babel-plugin-transform-object-rest-spread"
          ].map(require.resolve)
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.BASE_PATH": publicPath
    })
  ]
};
