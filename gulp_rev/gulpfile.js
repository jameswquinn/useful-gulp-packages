var gulp = require('gulp');
var rev = require('gulp-rev-hash');

gulp.task('rev', function () {
    gulp.src('template.html')
        .pipe(rev())
        .pipe(gulp.dest('.'));
});
