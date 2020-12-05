const esLint = {
  test: /\.(js|jsx)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        eslintPath: require.resolve('eslint'),
        emitWarning: true,
      },
      loader: require.resolve('eslint-loader'),
    },
  ],
};

const baseRules = {
  test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
  exclude: /node_modules/,
  use: [require.resolve('babel-loader')],
};

export default isDev => {
  if (isDev) {
    return [esLint, baseRules];
  }

  return [baseRules];
};
