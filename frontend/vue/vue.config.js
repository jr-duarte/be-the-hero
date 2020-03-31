module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/_default_files.scss";`
      }
    }
  },
  transpileDependencies: ['vuex-module-decorators', 'miragejs'],
  lintOnSave: false,
  publicPath: './',
  transpileDependencies: ['vuex-persist']
};
