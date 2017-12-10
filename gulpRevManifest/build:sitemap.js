var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
var save = require('gulp-save');

gulp.task('html', function() {
    gulp.src('dist/**/*.html', {
          read: false
        })
        .pipe(save('before-sitemap'))
        .pipe(sitemap({
                siteUrl: 'http://www.amazon.com'
        })) // Returns sitemap.xml
        .pipe(gulp.dest('dist'))
        .pipe(save.restore('before-sitemap')) //restore all files to the state when we cached them
        // -> continue stream with original html files
        // ...
});
