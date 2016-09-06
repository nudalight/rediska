'use strict';

const path = require('path');

module.exports = {

  debug: true,

  entry: './dev/client/Flux/app.jsx',

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
