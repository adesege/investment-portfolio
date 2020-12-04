const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge: webpackMerge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const configCommon = require('./webpack.common');

module.exports = webpackMerge(configCommon, {
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        level: 11,
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
});
