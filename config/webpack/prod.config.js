const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackPluginCopy = require('webpack-plugin-copy')
const WebpackCleanPlugin = require('webpack-clean')
const RenameBundlePlugin = require('./rename-bundle-webpack-plugin')
const environment = require('./environment-vars')

module.exports = {
  entry: './src/ClientApp.jsx',
  devtool: false,
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].scss',
      allChunks: true
    }),
    new StyleExtHtmlWebpackPlugin({
      minify: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.scss$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env': environment
    }),
    new WebpackPluginCopy([{ from: 'assets', to: 'assets' }, { from: 'index.html' }]),
    new WebpackCleanPlugin(['bundle.js.gz', 'bundle.js.map'], {
      basePath: path.join(__dirname, '../../public')
    }),
    new RenameBundlePlugin()
  ]
}
