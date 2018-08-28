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
    'courses.js': './js/courses.js',
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
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['env']],
          },
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
      proxy: 'http://localhost:4000',
      port: 8080,
      files: ['_site'],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    proxy: {
      '/api-2.0': 'https://www.udemy.com',
    },
  },
};
