import { Configuration } from 'webpack';
import common from './webpack.common';

const merge = require('webpack-merge');

const dev: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
};

const config: Configuration = merge(common, dev);
export default config;