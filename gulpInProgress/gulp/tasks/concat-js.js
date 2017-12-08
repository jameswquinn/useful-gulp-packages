"use strict";

const gulp = require('gulp'),
      rev = require('gulp-rev'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename');

// Important files to be placed in head
const core = ['node_modules/axios/dist/axios.js',
'node_modules/moonjs/dist/moon.js',
'node_modules/moon-router/dist/moon-router.js',
'node_modules/monx/dist/monx.js',
'node_modules/lazysizes/lazysizes.js',
];

// Files to be placed in body
const vendor = ['node_modules/lazysizes/plugins/bgset/ls.bgset.js',
'node_modules/lazysizes/plugins/video-embed/ls.video-embed.js',
'node_modules/covervid/covervid.js',
'node_modules/macy/dist/macy.js',
'node_modules/siema/dist/siema.min.js',
'node_modules/instafeed/lib/instafeed.js',
'node_modules/dynamics.js/lib/dynamics.js'
];

// Plugin variables and/or custom application scripts
const app = []

      gulp.task('build:scripts:core', ['build:scripts:vendor', 'build:scripts:app' ], () =>
      	gulp.src(core)
      		.pipe(sourcemaps.init({largeFile: true}))
      		.pipe(concat({path: 'js/core.js', cwd: ''}))
          .pipe(babel({
            presets: ['es2015']
          }))
          .pipe(uglify())
          .pipe(rename({
                  suffix: ".min"
              }))
      		.pipe(rev())
      		.pipe(sourcemaps.write('.'))
      		.pipe(gulp.dest('dist'))
      );

      gulp.task('build:scripts:vendor', () =>
      	gulp.src(vendor)
      		.pipe(sourcemaps.init({largeFile: true}))
      		.pipe(concat({path: 'js/vendor.js', cwd: ''}))
          .pipe(babel({
            presets: ['es2015']
          }))
          .pipe(uglify())
          .pipe(rename({
                  suffix: ".min"
              }))
      		.pipe(rev())
      		.pipe(sourcemaps.write('.'))
      		.pipe(gulp.dest('dist'))
      );

      gulp.task('build:scripts:app', () =>
      	gulp.src(app)
      		.pipe(sourcemaps.init({largeFile: true}))
      		.pipe(concat({path: 'js/app.js', cwd: ''}))
          .pipe(babel({
            presets: ['es2015']
          }))
          .pipe(uglify())
          .pipe(rename({
                  suffix: ".min"
              }))
      		.pipe(rev())
      		.pipe(sourcemaps.write('.'))
      		.pipe(gulp.dest('dist'))
      );
