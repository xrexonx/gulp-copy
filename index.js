'use strict';

var gulp  = require('gulp');
var gutil = require('gulp-util');


module.exports = function (filesToCopy, destination) {

    filesToCopy = typeof filesToCopy === 'string' ? [filesToCopy] : filesToCopy;

    if (!Array.isArray(filesToCopy) && typeof filesToCopy !== 'function') {
        throw new gutil.PluginError('gulp-copy', '`filesToCopy` should be a string, array, or function');
    }

    return gulp
              .src(filesToCopy)
              .pipe(gulp.dest(destination));
};