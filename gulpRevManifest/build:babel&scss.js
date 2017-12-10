"use strict";

const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer'); // Copy to main project
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('babel', () =>
    gulp.src('src/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015'],
      }))
      .pipe(concat('main.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('js'))
);

gulp.task('sass', () =>
  sass('src/scss/main.scss', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
);

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['babel']);
});


gulp.task('default', ['sass', 'babel', 'watch'], () => {});
