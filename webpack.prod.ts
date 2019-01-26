import { Configuration } from 'webpack';
import common from './webpack.common';

const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');

const prod: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].bundle.js',
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};

const config: Configuration = merge(common, prod);
export default config;