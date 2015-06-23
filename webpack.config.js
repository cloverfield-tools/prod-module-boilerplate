var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV || 'development';


var eslintLoader = {
  test: /\.js$/,
  loaders: ['eslint'],
  include: path.resolve('./source')
};


module.exports = {
  devtool: 'sourcemap',

  entry: './source/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./build')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ],

  module: {
    preLoaders: env === 'development' ? [
      eslintLoader
    ] : [],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?plugins=object-assign'],
        include: path.resolve('./source')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  stats: {
    colors: true
  },

  eslint: {
    configFile: './.eslintrc'
  }
};
