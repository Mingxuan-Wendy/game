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
    host:'0.0.0.0'
  },

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
  },
  chainWebpack: config => {
      // update css-loader settings
      const oneOfsMap = config.module.rule('css').oneOfs.store;
      oneOfsMap.forEach(item => {
        item.use('css-loader')
            .loader('css-loader')
            .tap(options => {
              return {
              ...options,
              esModule: false,  };
            });
      });
  }
})
