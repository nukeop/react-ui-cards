import * as path from "path";
import * as webpack from "webpack";
import nodeExternals from 'webpack-node-externals';

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

const config: webpack.Configuration = {
  mode: "production",
  entry: path.resolve(SRC_DIR, "index.tsx"),
  output: {
    path: DIST_DIR,
    filename: "index.js",
    library: "reactUiCards",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            noEmit: false
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: "raw-loader",
      },
    ],
  },
  externals: [nodeExternals()],
  target: "web",
};

export default config;
