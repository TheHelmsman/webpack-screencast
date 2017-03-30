# webpack-screencast
Based on https://youtu.be/kLMjOd-x0aQ?list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn
Covered subjects:
+ simple config
+ external access to modules
+ re-build on changes
+ source-maps
+ working with different environments

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
+ (for development)
```
NODE_ENV=development webpack
```
+ (for production)
```
webpack
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