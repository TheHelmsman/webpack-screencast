'use strict';

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
  watch: true,

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
  devtool: "eval"
}