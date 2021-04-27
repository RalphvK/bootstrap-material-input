'use strict';

// node modules
var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var mergeStream = require('merge-stream');
var autoprefixer = require('gulp-autoprefixer');

// path config
var path = {
    scss: './*.scss',
    css: './'
};

// scss compile task
gulp.task('scss', function () {
    return gulp.src(path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
});

// watch
gulp.task('watch', function () {
    gulp.watch('./*.scss', gulp.series('scss'));
});

// standard task for gulp
gulp.task('default', gulp.series('watch', 'scss'));