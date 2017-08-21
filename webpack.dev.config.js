import webpack from 'webpack';

module.exports = {

  entry:    [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    __dirname + '/app/static/index.js'
  ],

  output: {
      path: '/',
      publicPath: 'http://localhost:3000/scripts/',
      filename: 'bundle.js'
  }
}
