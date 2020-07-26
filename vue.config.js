module.exports = {
  publicPath:'./',
  // publicPath: process.env.NODE_ENV === 'production' ? '/yayi/' : '/',
  assetsDir:'static',
  devServer: {
    port: 8010,     // 端口
    // proxy:{
    //   '/up_photo': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //   },
    // }
  },
  lintOnSave: false,// 取消 eslint 验证

}
