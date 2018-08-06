const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { baseConfig, basePath } = require('./webpack.base')

/** @type {webpack.Configuration} */
const config = {
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CopyWebpackPlugin([
      { from: path.join(basePath, 'public/'), to: path.join(basePath, 'dist') }
    ]),
    new HTMLWebpackPlugin({ template: path.join(basePath, 'public/index.html') })
  ]
}

module.exports = Object.assign(baseConfig, config)
