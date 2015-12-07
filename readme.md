# gulp-copy


Enables you to copy files blah blah


## Install

```
$ npm install --save gulp-copy
```


## Usage


You may want to just filter the stream content:

```js
var copy = require('gulp-copy');

gulp.task('copy', function () {

	copy('someFiles.js', '/someDest');

});
```

## License

MIT © [Rexon A. De los Reyes](http://xrexonx.github.io)