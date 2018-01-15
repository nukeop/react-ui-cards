const webpack = require('webpack');
const path = require('path');

const DEMO_DIR = path.resolve(__dirname, 'demo');

module.exports = {
  entry: path.resolve(DEMO_DIR, 'index.jsx'),
  output: {
    path: DEMO_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[local]!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
