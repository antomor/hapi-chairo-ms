var gulp = require('gulp')
  ,nodemon = require('gulp-nodemon')
  ,gulpMultiProcess = require('gulp-multi-process');

gulp.task('run:math-service', function(cb){
  nodemon({
    script: 'services/math-service.js',
    ext: 'js'
  });
  
  cb();
});

gulp.task('run:hello-service', function(cb){
  nodemon({
    script: 'services/hello-service.js',
    ext: 'js'
  });
  
  cb();
});

gulp.task('run:user-service', function(cb){
  nodemon({
    script: 'services/user-service.js',
    ext: 'js'
  });
  
  cb();
});

gulp.task('run:server', function(){
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
});

gulp.task('run:services', function(cb) {
  // task1 and task2 will run in different processes 
  return gulpMultiProcess(['run:hello-service', 'run:math-service', 'run:user-service' ], cb);
});

gulp.task('run:all', function(cb) {
  // task1 and task2 will run in different processes 
  return gulpMultiProcess(['run:services', 'run:server' ], cb);
});

// Default Task
gulp.task('default', ['run:all']);