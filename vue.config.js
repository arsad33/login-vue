const stripTrailingSlash = (str) =>  str.endsWith('/') && str !== '/' ? str.slice(0, -1) : str;

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 5000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/layerexchange-api': {
        target: `https://dcw-test.layermark.com`,
        logLevel: 'debug',
        changeOrigin: true,
        onProxyReq: function (request) {
          request.setHeader("origin", "https://dcw-test.layermark.com");
          request.setHeader("referer", "https://dcw-test.layermark.com");
          console.log(request);
        }
      }
    }
  },
  publicPath: stripTrailingSlash(process.env.PUBLIC_PATH || '/')
}
