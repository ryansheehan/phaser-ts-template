import { Configuration } from 'webpack';
import * as path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config: Configuration = {
  entry: './src/main.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}

export default config;