const webpack = require('webpack');
const path = require('path');

const DEMO_DIR = path.resolve(__dirname, 'demo');

module.exports = {
  entry: path.resolve(DEMO_DIR, 'index.jsx'),
  output: {
    path: DEMO_DIR,
    filename: 'bundle.js'
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
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[local]!sass-loader'
      }, {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};
