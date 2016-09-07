'use strict';

const path = require('path');

module.exports = {
  devtool: "source-map",

  debug: true,

  entry: './dev/client/flux/app.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }


  

};
