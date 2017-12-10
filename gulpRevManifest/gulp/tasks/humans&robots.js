"use strict";

const gulp = require ('gulp'),
    humans = require('gulp-humans'),
    robots = require('gulp-robots'),

gulp.task('build:misc', function () {
    gulp.src('src/index.html')
        .pipe(humans({
						'team': [
							'<name> -- <role> -- <twitter>'
						],
            'thanks': [
							'<name>',
            ],
            'technology colophon': [
                'CSS3, HTML5 Apache Server Configs, jQuery, Modernizr, Normalize.css'
            ]
        }))
        .pipe(gulp.dest('dist'))
				.pipe(robots({
            useragent: '*',
            allow: ['folder1/', 'folder2/'],
            disallow: ['cgi-bin/']
        }))
        .pipe(gulp.dest('dist'));
});
