const externals = [
  'react',
  'react-dom',
  'react-router-dom',
  'react-router',
  'prop-types',
  'styled-components',
  'ramda',
];

export default (isDev) => isDev ? [] : externals;