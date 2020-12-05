module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.test.{js,jsx}', '!src/index.js'],
  coverageDirectory: 'coverage/',
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  modulePaths: ['src'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/internals/mocks/cssModule.js',
    '^containers[/](.+)': '<rootDir>/src/react/containers/$1',
    '^helpers[/](.+)': '<rootDir>/src/helpers/$1',
    '^enums[/](.+)': '<rootDir>/src/enums/$1',
    '^store[/](.+)': '<rootDir>/src/store/$1',
    '^libs[/](.+)': '<rootDir>/src/libs/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/config/internals/testing/test-bundler.js',
    '<rootDir>/config/internals/testing/styled-components-setup.js',
  ],
  setupFiles: ['raf/polyfill', '<rootDir>/config/internals/testing/enzyme-setup.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}', '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
