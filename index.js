'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function _safeCheck(filesToCopy) {

    filesToCopy = typeof filesToCopy === 'string' ? [filesToCopy] : filesToCopy;

    if (!Array.isArray(filesToCopy) && typeof filesToCopy !== 'object') {
        throw new gutil.PluginError('gulp-copy-rex', '`filesToCopy` should be a string, array or object.');
    }
    return filesToCopy;
}

function _setFilename(opts) {
    if (opts.filename) {
        var filename = opts.filename.indexOf('.min.js') >= 0 ? opts.filename : opts.filename + '.min.js';
    }
    return filename || 'app.min.js';
}

module.exports = function (filesToCopy, destination, opts) {

     filesToCopy = _safeCheck(filesToCopy);
     opts = opts || {min: false};

    //if minify is true
     var filename = opts.min ? _setFilename(opts) : '';

    return gulp
        .src(filesToCopy)
        .pipe(opts.min ? concat(filename) : gutil.noop())
        .pipe(opts.min ? uglify() : gutil.noop())
        .pipe(gulp.dest(destination));
};
