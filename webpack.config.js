'use strict';

//  const to define environment
const NODE_ENV = process.env.NODE_ENV || 'development';

//  import webpack that was installed locally
const webpack = require('webpack');

module.exports = {
  entry: './home',
  output: {
    //  filename for builded js file
    filename: 'build.js',
    //  after build, export of module will be placed into "home" param
    library: "home"
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

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV : JSON.stringify(NODE_ENV),
      LANG : JSON.stringify('ru')
    })
  ]
}