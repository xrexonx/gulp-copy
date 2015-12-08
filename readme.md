# gulp-copy

[![Build Status](https://travis-ci.org/xrexonx/gulp-copy.svg?branch=master)](https://travis-ci.org/xrexonx/gulp-copy)
[![npm version](https://badge.fury.io/js/gulp-copy-rex.svg)](https://badge.fury.io/js/gulp-copy-rex)
[![Downloads](http://img.shields.io/npm/dm/gulp-copy-rex.svg)](https://www.npmjs.com/package/gulp-copy-rex)


Enables you to copy or transfer files on your gulp task (gulpfile.js).
## Install

```
$ npm install --save-dev gulp-copy-rex
```
[![NPM](https://nodei.co/npm/gulp-copy-rex.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-copy-rex/)

## Usage

Can use this inside of your any gulp tasks or you can create a specific tasks for it.

```js
var copy = require('gulp-copy-rex');

gulp.task('copy', function () {

	//array of files ~ array / object
    var files = [
  			'./node_modules/someVendors/vendors.js',
  			'./bower_components/someVendors2/vendors2.js',
  			'./bower_components/someVendors3/vendors3.js',
  			];

  	or

  	//single file ~ string
  	var files = './bower_components/angular/angular.min.js'

    
    copy(files,'yourDestination/folder');
});

```

## Run Task

```
$ gulp copy
```

## License

MIT © [Rexon A. De los Reyes](http://xrexonx.github.io)

#### Thanks and Enjoy. Goodspeed. ~ xrexonx
