const { defineConfig } = require('@vue/cli-service')
// const crypto = require('crypto-browserify');
// const stream = require('stream-browserify');
const webpack = require('webpack');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave:false,
  devServer:{
    open:true,
    host:'localhost'
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       crypto: require.resolve('crypto-browserify'),
  //       stream: require.resolve('stream-browserify'),
  //     },
  //   }
  // }
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        zlib: 'browserify-zlib',
      }),
    ],
    resolve: {
      fallback: {
        zlib: require.resolve('browserify-zlib'),
        querystring: require.resolve('querystring-es3'),
        assert: require.resolve('assert'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        fs: path.resolve(__dirname, 'empty-shim.js'),

      },
    },
  }

})
