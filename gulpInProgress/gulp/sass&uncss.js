"use strict";

var gulp = require("gulp"),
    uncss = require("gulp-uncss"),
    sass = require("gulp-sass"),
    rev = require('gulp-rev'),
    minifyCSS = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    glob = require("glob");

gulp.task("build:sass", function () {
    return gulp.src("src/sass/**/*.scss")
        .pipe(sass())
        .pipe(uncss({
            html: glob.sync("dist/**/*.html")
        }))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(rev())
        .pipe(gulp.dest("dist/css"));
});
