const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {template} = require("lodash");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: false,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template:'./src/index.html'
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/env", {
              useBuiltIns: "usage",
              corejs: 2,
            }],
            ["@babel/preset-react", {"runtime": "automatic"}],
          ],
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};