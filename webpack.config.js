const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const prod = require('./config/webpack/prod.config.js')
const dev = require('./config/webpack/dev.config.js')

module.exports = merge(process.env.NODE_ENV === 'production' ? prod : dev, {
  context: __dirname,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [new CaseSensitivePathsPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve('src')]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve('scss/variables.scss')]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|png|svg)$/,

        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
            publicPath: '../assets/fonts'
          }
        }
      }
    ]
  }
})
