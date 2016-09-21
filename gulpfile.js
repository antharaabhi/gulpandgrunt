var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpJade = require('gulp-jade');

gulp.task('sassToCss', function () {
	gulp.src('public/development/css/*.sass')
	.pipe(gulpSass().on('error',gulpSass.logError))
	.pipe(gulp.dest('public/production/css/'));
});

gulp.task('jadeToHtml', function () {
	return gulp.src('public/development/templates/*.jade')
    .pipe(gulpJade({
      pretty: true
    }))
    .pipe(gulp.dest('public/production/templates'));
});  
gulp.task('watch', function () {
	gulp.watch('public/development/css/*.sass', ['sassToCss']);
	gulp.watch('public/development/templates/*.jade', ['jadeToHtml']);
});

gulp.task('default',['sassToCss', 'jadeToHtml', 'watch']);