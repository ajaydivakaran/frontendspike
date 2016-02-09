"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.es6',
  output: {
    path: 'dist',
    filename: 'js/bundle.dist.js'
  },
  module:{
    loaders: [
      {
        test: 'src/**/*.es6',
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/index.template.html'
    })
  ]
};