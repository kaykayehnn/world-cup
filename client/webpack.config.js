const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/** @type {webpack.Configuration} */
const config = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      moment$: 'moment/moment.js'
    }
  },
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
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './public/**/*', to: './' }
    ]),
    new HTMLWebpackPlugin({ template: path.join(__dirname, 'public/index.html') })
  ]
}

const productionOnly = (config) => {
  /** @type {webpack.Configuration} */
  const specificProps = {
    mode: 'production',
    devtool: 'none'
  }

  const productionConfig = {
    ...config,
    ...specificProps,
    plugins: config.plugins.filter(p => !(p instanceof webpack.HotModuleReplacementPlugin))
  }
  return productionConfig
}

module.exports = env => env === 'production' ? productionOnly(config) : config
