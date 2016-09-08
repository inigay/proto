var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var inject = require('gulp-inject');
var sass = require('gulp-sass');

var config = require('./gulp.config')();

gulp.task('check', function(){

	return gulp
		.src(config.alljs)
		.pipe(jscs())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'), {verbose: true});
});


gulp.task('wiredep', function() {
	var options = config.getWiredepDefaultOptions;
	var wiredep = require('wiredep').stream;

	return gulp
		.src(config.devindex)
		.pipe(wiredep(options))
		.pipe(inject(gulp.src(config.js, {read: false}), {cwd: './'}))
		.pipe(gulp.dest(config.client));
});


gulp.task('styles', function() {

	return gulp
			.src(config.sass)
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(config.css));
});


gulp.task('dev', ['wiredep', 'styles'], function(){

	return gulp
		.src(config.devindex)
		.pipe(inject(gulp.src(config.css + '/*.css', {read: false}), {cwd: './'}))
		.pipe(gulp.dest(config.client));
});