module.exports = {
  lintOnSave: true,
  crossorigin: 'anonymous',
  integrity: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'App Stocks',
    },
  },
  publicPath: '',
  outputDir: 'build',
  devServer: {
    disableHostCheck: true,
    useLocalIp: false,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
};