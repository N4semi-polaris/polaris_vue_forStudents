module.exports = {
  publicPath: '/polaris_vue_app/',
  outputDir: 'docs',
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {

      "/calendar/":{
        target: "//17930ky.pythonanywhere.com/",
        changeOrigen: true,
      },
      "/recommend/":{
        target: "//17930ky.pythonanywhere.com/",
        changeOrigen: true,
      },
    }
  }
}