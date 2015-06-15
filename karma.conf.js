'use strict';

var path = require('path');

var webpackConfig = {
  devtool: 'eval',

  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'test')
      },
      {
        test: /\.js$/,
        loader: 'isparta',
        include: path.join(__dirname, 'source')
      }
    ],
    loaders: [
      {test: /\.json$/, loader: 'json'}
    ]
  },
  stats: {
    colors: true
  }
};


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/webpack.tests.js'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },
    exclude: [],
    preprocessors: {
      'test/webpack.tests.js': ['webpack']
    },
    reporters: ['nyan'],
    coverageReporter: {
      dir: './coverage/',
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      },
      reporters: [
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'},
        {type: 'html'}
      ]
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
