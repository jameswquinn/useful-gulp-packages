"use strict";

const gulp = require('gulp'),
    $ = require('gulp-load-plugins')();
    
/*! Example of html tag to select supported format & size

<picture>
<source sizes="(max-width: 2048px) 100vw, 2048px"
srcset="
image1-100px.webp 100w,
image1-240px.webp 240w,
image1-320px.webp 320w,
image1-500px.webp 500w,
image1-640px.webp 640w,
image1-800px.webp 800w,
image1-1600px.webp 1600w,
image1-2048px.webp 2048w" type="image/webp">
<img
sizes="(max-width: 2048px) 100vw, 2048px"
srcset="
image1-100px.jpg 100w,
image1-240px.jpg 240w,
image1-320px.jpg 320w,
image1-500px.jpg 500w,
image1-640px.jpg 640w,
image1-800px.jpg 800w,
image1-1600px.jpg 1600w,
image1-2048px.jpg 2048w"
src="image1-640px.jpg"
alt="" type="image/jpeg">
</picture>
*/

gulp.task('build:images', () => {
    gulp.src('src/uploads/*.{jpg,png,tiff,webp}').pipe($.responsive({
        '*.{jpg,png}': [{
            width: 100,
            rename: {
                suffix: '-100px',
                extname: '.jpg',
            },
            format: 'jpeg',
        }, {
            width: 240,
            rename: {
                suffix: '-240px',
                extname: '.jpg',
            },
            format: 'jpeg',
        }, {
            width: 320,
            rename: {
                suffix: '-320px',
                extname: '.jpg',
            },
            format: 'jpeg',
        }, {
            width: 500,
            rename: {
                suffix: '-500px',
                extname: '.jpg',
            },
            format: 'jpeg',
        }, {
            width: 640,
            rename: {
                suffix: '-640px',
                extname: '.jpg',
            },
        }, {
            width: 800,
            rename: {
                suffix: '-800px',
                extname: '.jpg',
            },
            format: 'jpeg',
        }, {
            width: 1600,
            rename: {
                suffix: '-1600px',
                extname: '.jpg',
            },
            format: 'jpeg',
        }, {
            width: 2048,
            rename: {
                suffix: '-2048px',
                extname: '.jpg',
            },
            withoutEnlargement: true,
        }, {
            width: 100,
            rename: {
                suffix: '-100px',
                extname: '.webp',
            },
        }, {
            width: 240,
            rename: {
                suffix: '-240px',
                extname: '.webp',
            },
        }, {
            width: 320,
            rename: {
                suffix: '-320px',
                extname: '.webp',
            },
        }, {
            width: 500,
            rename: {
                suffix: '-500px',
                extname: '.webp',
            },
        }, {
            width: 640,
            rename: {
                suffix: '-640px',
                extname: '.webp',
            },
        }, {
            width: 800,
            rename: {
                suffix: '-800px',
                extname: '.webp',
            },
        }, {
            width: 1600,
            rename: {
                suffix: '-1600px',
                extname: '.webp',
            },
        }, {
            width: 2048,
            rename: {
                suffix: '-2048px',
                extname: '.webp',
            },
        }],
    }, {
        quality: 80,
        progressive: true,
        withMetadata: false,
        errorOnEnlargement: false,
    })).pipe(gulp.dest('dist/img'));
});
