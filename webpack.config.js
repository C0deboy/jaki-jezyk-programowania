const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'home.bundle.js': './js/home/merge.js',
    'home.bundle.css': './css/home/merge.css',
    'global.bundle.js': './js/global/merge.js',
    'global.bundle.css': './css/global/merge.css',
    'faq.js': './js/faq.js',
    'language.js': './js/language.js',
    'start.js': './js/start.js',
    'faq.css': './css/faq.css',
    'language.css': './css/language.css',
    'start.css': './css/start.css',
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
          presets: [['es2015', { modules: false }]],
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
  ],
  devServer: {
    contentBase: path.resolve(__dirname, ''),
  },
};
