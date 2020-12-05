import TerserPlugin from 'terser-webpack-plugin';

const prodOptimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        warnings: false,
        compress: {
          comparisons: false,
        },
        parse: {},
        mangle: true,
        output: {
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: true,
    }),
  ],
  nodeEnv: 'production',
  sideEffects: true,
  concatenateModules: true,
};

const devOptimization = {
  splitChunks: {
    chunks: 'all',
  },
};

export default isDev => (isDev ? devOptimization : prodOptimization);
