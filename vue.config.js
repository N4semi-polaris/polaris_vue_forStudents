module.exports = {
  publicPath: '/polaris_vue_app/',
  outputDir: 'docs',
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/accounts": {
        target: "http://17930ky.pythonanywhere.com",
        changeOrigin: true,
      },
      "/calendar":{
        target: "http://17930ky.pythonanywhere.com",
        changeOrigen: true,
      },
      "/recommend":{
        target: "http://17930ky.pythonanywhere.com",
        changeOrigen: true,
      },
    }
  }
}