'use strict';

module.exports = {
  entry: './home',
  output: {
    //  filename for builded js file
    filename: 'build.js',
    //  after build, export of module will be placed into "home" param
    library: "home"
  }
}