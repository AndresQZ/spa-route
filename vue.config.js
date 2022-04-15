const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: "localhost"
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
  chainWebpack: config => {
    config.externals(['@web-taxco/spa-shared-state']);
  },
  transpileDependencies: true
})

