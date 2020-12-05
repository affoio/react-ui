import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import devPlugins from './devPlugins';
import productionPlugins from './productionPlugins';

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(true),
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

if (process.env.ANALYZE) {
  basePlugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  );
}

export default isDev => [...basePlugins.concat(isDev ? devPlugins() : productionPlugins())];
