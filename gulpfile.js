var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	minifycss = require("gulp-minify-css");


gulp.task('minifycss', function() {
	return gulp.src('src/**/*.css')
		.pipe(autoprefixer())
		.pipe(concat('dialog.css'))
		.pipe(gulp.dest('dist'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist'));

});

gulp.task('minifyjs', function() {
	return gulp.src('src/*.js')
		.pipe(concat('dialog.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
	gulp.start('minifycss', 'minifyjs');
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['minifyjs']);
	gulp.watch('src/*.css', ['minifycss']);
});