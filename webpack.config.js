const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const config = {
  entry: "./src/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt](s|sx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/env",
              {
                useBuiltIns: "usage",
                targets: {"ie":11},
                corejs: 3,
              },
            ],
            ["@babel/react", { runtime: "automatic" }],
          ],
          plugins:[]
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require("tailwindcss"),
                  require("autoprefixer")
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = (env,argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.devServer = {
      hot: true,
    }
    config.module.rules[0].options.plugins.push(require.resolve('react-refresh/babel'))
    config.plugins.push(new ReactRefreshWebpackPlugin())
    config.target = ['web']
  }
  if (argv.mode === 'production') {
    config.target = ['web','es5']
  }
  return config
}