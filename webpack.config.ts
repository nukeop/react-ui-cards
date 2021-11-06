import * as path from "path";
import * as webpack from "webpack";

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

const config: webpack.Configuration = {
  mode: "production",
  entry: path.resolve(SRC_DIR, "index.tsx"),
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "ts-loader",
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
              modules: true,
              localIdentName: "[local]",
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
};

export default config;
