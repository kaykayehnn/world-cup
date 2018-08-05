const path = require('path')

const basePath = path.resolve(__dirname, '..')

/** @type {webpack.Configuration} */
const baseConfig = {
  context: basePath,
  entry: './src/index.js',
  output: {
    path: path.resolve(basePath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      moment$: 'moment/moment.js'
    }
  }
}

module.exports = {
  baseConfig,
  basePath
}
