const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 3009,  // 设置端口号
    open: true,  // 自动打开浏览器
    host: '127.0.0.1'  // 设置IP地址
  },
})
