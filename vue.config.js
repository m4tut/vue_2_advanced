const path = require('path')

module.exports = {
  assetsDir: '',
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@assets/styles/helpers/vars.scss"; @import "@assets/styles/helpers/functions.scss"; @import "@assets/styles/helpers/mixins.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      modules: [__dirname, 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@app': path.resolve(__dirname, 'src/app/'),
        '@entities': path.resolve(__dirname, 'src/entities/'),
        '@features': path.resolve(__dirname, 'src/features/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@processes': path.resolve(__dirname, 'src/processes/'),
        '@shared': path.resolve(__dirname, 'src/shared/'),
        '@widgets': path.resolve(__dirname, 'src/widgets/'),
        '@api': path.resolve(__dirname, 'src/shared/api/'),
        '@assets': path.resolve(__dirname, 'src/shared/assets/'),
        '@store': path.resolve(__dirname, 'src/shared/store/'),
        '@layouts': path.resolve(__dirname, 'src/shared/layouts/'),
      },
    },
  },
}
