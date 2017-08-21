var path = require('path');

module.exports = {
  entry: __dirname + '/app/static/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: 'transform.js',
    path: __dirname + '/build'
  }
};
