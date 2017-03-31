'use strict';

//  const to define environment
const NODE_ENV = process.env.NODE_ENV || 'development';

//  import webpack that was installed locally
const webpack = require('webpack');

//  multi-compilation
// module.exports = [{ }, { }, { }]

//  multiple entry points
module.exports = {
  context: __dirname + '/frontend',
  entry: {
    home: "./home",
    about: "./about",
    common: ["./common", "./welcome"]
  },
  output: {
    path: __dirname + '/public',
    //  filename for builded js file
    filename: '[name].js',
    //  after build, export of module will be placed into "home" param
    library: "[name]"
  },

  //  ++++++++++++++++++++++++++++++++++
  //  live rebuild
  //  ++++++++++++++++++++++++++++++++++

  //  webpack will watch for file changes
  //  if something will be changed, webpack will run rebuild
  //  will be set to true only if expression below will return true
  watch: NODE_ENV == 'development',

  //  how much time to wait until run rebuild - default 300ms, changed to 250ms
  watchOptions: {
    aggregateTimeout: 250
  },

  //  ++++++++++++++++++++++++++++++++++
  //  sourcemap for production (source-map or cheap-source-map)
  //  sourcemap for development (eval or cheap-inline-module-source-map)
  //  ++++++++++++++++++++++++++++++++++

  //  sourcemap will be placed in external build.js.map file
  //  devtool: "source-map"
  
  //  sourcemap will be written into the bottom of build.js file
  //devtool: "inline-source-map"

  //  sourcemap will be written into the bottom of the build.js file in shorter form
  // devtool: "cheap-inline-module-source-map"

  // each module will contains eval with param sourceUrl (actual sourcemap will not be build)
  // devtool: "eval"

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : false,

  //  setting environment via plugins
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV : JSON.stringify(NODE_ENV),
      LANG : JSON.stringify('ru')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
      // minChunks: 2
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common",
    //   chunks: ['about', 'home']]
    // })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common-goods",
    //   chunks: ['shop', 'order']
    // })
  ],

  //  for all modules
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  //  for module loaders
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['*-loader'],
    extensions: ['.js']
  },

  //  adding BABEL using loaders
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  }

};

//  add minifier for production
if(NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //  don't show unreacheable variables etc
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}