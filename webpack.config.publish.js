const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    library: 'cards',
    libraryTarget: "commonjs2",
    libraryExport: "default"
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    namedModules: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
      }, {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  }
};
