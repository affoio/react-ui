import { HashedModuleIdsPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default () => [
  new MiniCssExtractPlugin({
    filename: '[name][contenthash:5].css',
    chunkFilename: '[name][contenthash:5].chunk.css',
  }),
  new HashedModuleIdsPlugin({
    hashFunction: 'sha256',
    hashDigest: 'hex',
    hashDigestLength: 20,
  }),
];
