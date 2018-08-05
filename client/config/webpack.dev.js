const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { baseConfig, basePath } = require('./webpack.base')

/** @type {webpack.Configuration} */
const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['env', 'react'],
          plugins: ['react-hot-loader/babel', 'babel-plugin-transform-object-rest-spread'].map(require.resolve)
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './public/**/*', to: './' }
    ]),
    new HTMLWebpackPlugin({ template: path.join(basePath, 'public/index.html') })
  ]
}

module.exports = Object.assign(baseConfig, config)
