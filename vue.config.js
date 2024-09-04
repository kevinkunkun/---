const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"./",
  devServer: {
    client: {
      overlay: false,
    },},
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "网筑五四专题网站-攀枝花学院";
      return args;
    });
}
})
