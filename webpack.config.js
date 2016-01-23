var webpack = require('webpack');
var path = require('path');

var config = {
  entry : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/main.js'
  ],
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  modules : {
    loaders : [
      {
        test : /\.js$/,
        loaders : ['babel'],
        exclude : /node_modules/
      }
    ]
  }
}

module.exports = config;
