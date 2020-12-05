module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['babel-plugin-styled-components', { displayName: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-default-from',
    ['ramda'],
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
    },
  },
};
