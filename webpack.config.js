'use strict';

var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var srcPath = path.resolve(__dirname, 'src', 'index.js');
var dstPath = path.resolve(__dirname, 'dist', 'js');

module.exports = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'mi-angular-color-picker.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new ngAnnotatePlugin({add: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
