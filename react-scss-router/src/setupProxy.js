const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/home',createProxyMiddleware({
        target: 'https://home-api.pinduoduo.com',
        changeOrigin: true,
      })
    );
    app.use(
      '/api',createProxyMiddleware({
        target: 'http://api.bdplus.cn/',
        changeOrigin: true,
      })
    );
    app.use(
      '/api2',createProxyMiddleware({
        target: 'http://docker.bdplus.cn/',
        changeOrigin: true,
      })
    );
};
