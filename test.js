// // console.log(process.env.NODE_ENV)
// var webpackChain = require("webpack-chain")
// var webpack = require("webpack")
// var path = require("path")
// var HtmlWebpackPlugin = require("html-webpack-plugin")

// const config = new webpackChain();

// config
//   // Interact with entry points
//   .entry('index')
//   .add('src/index.js')
//   .end();

// config
//   .plugin('html')
//   .use(HtmlWebpackPlugin, [{
//     filename: 'app.html',
//     template: path.resolve('/a', './public/index.html'),
//   }]);

// config.module
//   .rule('image')
//   .test(/\.(png|jpe?g|gif)$/i)
//   .use('url-loader')
//   .loader('url-loader')
//   .options({
//     limit: 8192,
//   });


// console.log(JSON.stringify(config.toConfig()));

// const fs = require("fs");
// const { CachedInputFileSystem, ResolverFactory } = require("enhanced-resolve");

// // create a resolver
// const myResolver = ResolverFactory.createResolver({
// 	// Typical usage will consume the `fs` + `CachedInputFileSystem`, which wraps Node.js `fs` to add caching.
// 	fileSystem: new CachedInputFileSystem(fs, 4000),
//   extensions: [".js", ".json"],
//   /* any other resolver options here. Options/defaults can be seen below */
//   modules: ["node_modules"]
// });

// // resolve a file with the new resolver
// const context = {};
// const resolveContext = {};
// const lookupStartPath = "/Users/bytedance/Downloads/Git/cli/webpack-test";
// const request = "junmin";
// myResolver.resolve({}, lookupStartPath, request, resolveContext, (
// 	err,
// 	filepath
// ) => {
//   // Do something with the path
//   console.log(filepath);
  
// });

console.log(require.resolve('junmin.js'));
