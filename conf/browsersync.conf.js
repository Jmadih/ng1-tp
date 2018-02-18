const conf = require('./gulp.conf');
const proxyMiddleware = require('http-proxy-middleware');

module.exports = function () {
  const apiRoutes = ['/api'];
  var server = {
    baseDir: [
      conf.paths.tmp,
      conf.paths.src
    ],
    routes: {
      '/bower_components': 'bower_components'
    }
  };
  server.middleware = (function () {
    var middlewares = [];
    apiRoutes.forEach(function (route) {
      middlewares.push(proxyMiddleware(route, {target: 'http://localhost:9000'}));
    });
    return middlewares;
  })();
  return {
    server: server,
    open: false
  };
};
