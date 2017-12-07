'use strict';
// Define variables.
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const rev = require('gulp-rev');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');




// -----------------------------------------------------------------------------
//   2: Scripts
// -----------------------------------------------------------------------------

/**
 * Task: build:scripts:core
 *
 * Concatenates and uglifies global JS files and outputs result to the
 * appropriate location.
 */


gulp.task('build:scripts:core', ['build:scripts:vendor'], () =>
	gulp.src(['node_modules/axios/dist/axios.js',
  'node_modules/moonjs/dist/moon.js',
  'node_modules/moon-router/dist/moon-router.js',
  'node_modules/monx/dist/monx.js',
  'node_modules/lazysizes/lazysizes.js',
])
		.pipe(sourcemaps.init({largeFile: true}))
		.pipe(concat({path: 'js/core.js', cwd: ''}))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
		.pipe(rev())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
);

gulp.task('build:scripts:vendor', () =>
	gulp.src(['node_modules/axios/dist/axios.js',
  'node_modules/lazysizes/plugins/bgset/ls.bgset.js',
  'node_modules/lazysizes/plugins/video-embed/ls.video-embed.js',
  'node_modules/covervid/covervid.js',
  'node_modules/macy/dist/macy.js',
  'node_modules/siema/dist/siema.min.js',
  'node_modules/instafeed/lib/instafeed.js',
  'node_modules/dynamics.js/lib/dynamics.js'
])
		.pipe(sourcemaps.init({largeFile: true}))
		.pipe(concat({path: 'js/vendor.js', cwd: ''}))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
		.pipe(rev())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
);


// -----------------------------------------------------------------------------
//   3: Images
// -----------------------------------------------------------------------------

/**
 * Task: build:images
 *
 * Optimizes and copies image files.
 *
 * Using gulp-responsive
 *
 /**


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
     gulp.src('./src/uploads/*.{jpg,png,tiff,webp}')
         .pipe($.responsive({
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
                 // Do not enlarge the output image if the input image
                 // is already less than the required dimensions.
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
                 at
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
             // Global configuration for all images
             // The output quality for JPEG, WebP and TIFF output formats
             quality: 80,
             // Use progressive (interlace) scan for JPEG and PNG output
             progressive: true,
             // Strip all metadata
             withMetadata: false,
             // Do not emit the error when image is enlarged.
             errorOnEnlargement: false,
         }))
         .pipe(gulp.dest('dist/img'));
 });
