'use strict';

module.exports = {
  entry: './home',
  output: {
    //  filename for builded js file
    filename: 'build.js',
    //  after build, export of module will be placed into "home" param
    library: "home"
  },
  //  webpack will watch for file changes
  //  if something will be changed, webpack will run rebuild
  watch: true,

  //  how much time to wait until run rebuild - default 300ms, changed to 250ms
  watchOptions: {
    aggregateTimeout: 250
  }
}