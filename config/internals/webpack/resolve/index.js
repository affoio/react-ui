import path from 'path';

export default {
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  extensions: ['.js', '.jsx', '.react.js'],
  mainFields: ['browser', 'jsnext:main', 'main'],
  alias: {
    containers: path.resolve(__dirname, '../../../src/react/containers'),
    components: path.resolve(__dirname, '../../../src/react/components'),
    enums: path.resolve(__dirname, '../../../src/enums'),
    layouts: path.resolve(__dirname, '../../../src/react/layouts'),
    libs: path.resolve(__dirname, '../../../src/libs'),
    helpers: path.resolve(__dirname, '../../../src/helpers'),
    store: path.resolve(__dirname, '../../../src/store'),
  },
};
