const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    'home.bundle.js': './js/home/merge.js',
    'home.bundle.css': './css/home/merge.css',
    'global.bundle.js': './js/global/merge.js',
    'global.bundle.css': './css/global/merge.css',
    'faq.js': './js/faq.js',
    'wizard.js': './js/wizard/wizard.js',
    'faq.css': './css/faq.css',
    'extendTechnologies.js': './js/extendTechnologies.js',
    'technologies-list.css': './css/technologies-list.css',
    'language.css': './css/language.css',
    'wizard.css': './css/wizard.css',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015']],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: { baseDir: path.resolve(__dirname, '') },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, ''),
  },
};
