var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;
var url = require('url');
var proxy = require('proxy-middleware');

gulp.task('browserSync', function() {
  var proxyOptions = url.parse(config.apiUrl);
  proxyOptions.route = '/api';
  
  browserSync({
    server: {
      baseDir: config.server.baseDir,
      middleware: [proxy(proxyOptions)]
    },
    https:true
  });
});
