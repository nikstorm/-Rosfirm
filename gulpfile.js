'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
	gulp.src('sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
	gulp.watch('sass/*.sass');	
});
gulp.task('bootstrap', function(){
	gulp.src('node_modules/bootstrap/dist/**')
	.pipe(gulp.dest('app/libs/bootstrap'));
});
gulp.task('default',function(){
	gulp.watch('sass/*.sass',['sass']);
});
	