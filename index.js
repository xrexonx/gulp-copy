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

function _setFilename(filename) {
    if (filename) {
         filename = filename.indexOf('.min.js') >= 0 ? filename : filename + '.min.js';
    }
    return filename || 'app.min.js';
}

module.exports = function (filesToCopy, destination, opts) {

     filesToCopy = _safeCheck(filesToCopy);
     opts = opts || {min: false, concat: false};

    //set filename if concat is set to true
     var filename = opts.concat ? _setFilename(opts.filename) : '';

    return gulp
        .src(filesToCopy)
        .pipe(opts.concat ? concat(filename) : gutil.noop())
        .pipe(opts.min ? uglify() : gutil.noop())
        .pipe(gulp.dest(destination));
};
