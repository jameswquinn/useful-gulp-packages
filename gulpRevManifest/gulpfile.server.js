const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      del = require('del');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});

//gulp.watch("dist/**/*.css", ['sass']);
//gulp.watch("dist/*.html").on('change', browserSync.reload);

//gulp.watch("dist/css/*.min.css").on('change', browserSync.reload);

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});
