import { Configuration } from 'webpack';
import common from './webpack.common';

const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');

const prod: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].bundle.js',
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
};

const config: Configuration = merge(common, prod);
export default config;
