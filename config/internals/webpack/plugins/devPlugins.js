import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export default () => [
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new HtmlWebpackPlugin({
    inject: false,
    template: path.resolve(__dirname, '../../../../dev/public/index.html'),
    filename: 'index.html',
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/, // exclude node_modules
    failOnError: false, // show a warning when there is a circular dependency
  }),
];
