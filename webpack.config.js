/* eslint-disable quote-props */

const path = require('path');
const ExtractCssPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    'home.bundle': './js/home/home.js',
    'global.bundle': './js/global/global.js',
    'faq': './js/faq.js',
    'top-books': './js/top-books.js',
    'courses': './js/courses.js',
    'wizard': './js/wizard/wizard.js',
    'technologies-list': './js/technologies-list.js',
    'language': './js/language.js',
    'statistics': './js/statistics/statistics.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractCssPlugin({
      filename: '[name].css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      proxy: 'http://localhost:4000',
      port: 8080,
      files: ['_site'],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, ''),
  },
};
