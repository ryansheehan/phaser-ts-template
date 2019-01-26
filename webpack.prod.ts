import { Configuration } from 'webpack';
import common from './webpack.common';

const merge = require('webpack-merge');

const prod: Configuration = {
  mode: 'production'
};

const config: Configuration = merge(common, prod);
export default config;