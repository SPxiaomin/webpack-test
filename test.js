// console.log(process.env.NODE_ENV)
var webpackChain = require("webpack-chain")
var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

const config = new webpackChain();

config
  // Interact with entry points
  .entry('index')
  .add('src/index.js')
  .end();

config
  .plugin('html')
  .use(HtmlWebpackPlugin, [{
    filename: 'app.html',
    template: path.resolve('/a', './public/index.html'),
  }]);

config.module
  .rule('image')
  .test(/\.(png|jpe?g|gif)$/i)
  .use('url-loader')
  .loader('url-loader')
  .options({
    limit: 8192,
  });


console.log(JSON.stringify(config.toConfig()));
