/* eslint-disable quote-props */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    'home.bundle': './src/js/home/home.js',
    'global.bundle': './src/js/global/global.js',
    'top-books': './src/js/top-books.js',
    'courses': './src/js/courses.js',
    'wizard': './src/js/wizard/wizard.js',
    'technologies-list': './src/js/technologies-list.js',
    'language': './src/js/language.js',
    'statistics': './src/js/statistics/statistics.js',
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
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
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
