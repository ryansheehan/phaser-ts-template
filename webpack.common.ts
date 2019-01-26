import { Configuration } from 'webpack';
import * as path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: Configuration = {
  entry: './src/main.ts',

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      // manage fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },

      // manage images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },

      // manage styling
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // manage typescript
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CopyWebpackPlugin([
      'static/**/*',
      {
        from: 'favicons/*',
        flatten: true
      }
    ])
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
  }
}

export default config;