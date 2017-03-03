var minifycss        = require('gulp-minify-css');
var plumber          = require('gulp-plumber');
var uglify           = require('gulp-uglify');
var rename           = require('gulp-rename');
var connect          = require('gulp-connect');


module.exports = function(gulp) {
  return function() {
    gulp.src('./public/elements/views/*.js')
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest(function(file) {
		    return file.base;
		}))
		.pipe(connect.reload());
};
};
