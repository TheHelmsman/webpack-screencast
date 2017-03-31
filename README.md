# webpack-screencast
Based on https://youtu.be/kLMjOd-x0aQ?list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn
Covered subjects:
+ simple config [2.1]
+ external access to modules [2.2]
+ re-build on changes [2.3]
+ source-maps [2.4]
+ working with different environments [2.5]
+ use babel [2.6]
+ resolving [2.7]
+ use minifier (UglifyJS) [2.8]
+ multiple entry points [3.1]
+ multiple entry points - NoEmitOnErrorsPlugin [3.2]
+ multiple entry points - CommonsChunkPlugin [3.3]
+ multiple entry points - build stats [3.4]
+ multiple entry points - CommonsChunkPlugin settings [3.5]
+ multiple entry points - more code in common [3.6]

## how to install
+ install node.js
https://nodejs.org/en/download/package-manager/
or
https://nodejs.org/en/
+ install npm globally
```
sudo npm install npm -g
```
+ get source code (skipp this step if you downloaded it as zip file from github)
```
git clone https://github.com/TheHelmsman/webpack-screencast.git
```
+ run npm install to install all node_modules for the project
```
npm install
```

## how to build 
+ (for development - normal version of build js with maps)
```
NODE_ENV=development webpack
```
+ (for production - minified version of build.js)
```
NODE_ENV=production webpack
```

## how to run
```
static &
```

## view in browser
http://127.0.0.1:8080/home.html

## useful commands
+ open module repository (babel-loader) in browser
```
npm repo babel-loader
```
or (webpack repo)
```
npm repo webpack
```
+ view modules info on multiple entry points
```
webpack --display-modules
```
or (even more details)
```
webpack --display-modules -v
```
show statistics on build (upload generated file to webpack.github.io/analyse)
```
webpack --json --profile >stats.json
```