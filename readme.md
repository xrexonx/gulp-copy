# gulp-copy


Enables you to copy files blah blah

## Install

```
$ npm install --save-dev gulp-copy-rex
```

## Usage

Can use this inside of your any gulp tasks or you can create a specific tasks for it.

```js
var copy = require('gulp-copy-rex');

gulp.task('copy', function () {

	//array of files ~ object
    var files = [
  			'./node_modules/someVendors/vendors.js',
  			'./bower_components/someVendors2/vendors2.js',
  			'./bower_components/someVendors3/vendors3.js',
  			];

  	or

  	//single files ~ string
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
