import path from 'path';
import { NODE_ENV_IS_DEVELOPMENT } from '../../config';
import rules from './rules';
import plugins from './plugins';
import entry from './entry';
import resolve from './resolve';
import performance from './performance';
import optimization from './optimization';
import externals from './externals';

const isDev = NODE_ENV_IS_DEVELOPMENT;

export default {
  mode: isDev ? 'development' : 'production',
  entry: entry(isDev),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: process.env.PUBLIC_URL || '/',
    filename: isDev ? 'static/[name].js' : 'index.js',
    chunkFilename: isDev ? 'static/[name].js' : 'static/[name].[chunkhash:8].chunk.js',
    library: 'react-ui',
    libraryTarget: 'umd'
  },
  externals: externals(isDev),
  optimization: optimization(isDev),
  module: {
    rules: rules(isDev),
  },
  plugins: plugins(isDev),
  resolve,
  devtool: isDev ? 'inline-source-map' : false,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: performance(isDev),
};
