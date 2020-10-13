module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/accounts/": {
        target: "http://localhost:8000",
        changeOrigin: true,
      }
    }
  }
}