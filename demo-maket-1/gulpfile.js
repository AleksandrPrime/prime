var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('build', function(){
   gulp.src('./src/precss/*.css')
       .pipe(autoprefixer({
			browsers: ['> 0.01%'],
			cascade: false
		}))
	   .pipe(minify())
       .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/precss/*.css', ['build']);
});