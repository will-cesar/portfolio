var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jquery = require('gulp-jquery');
var sass = require('gulp-sass');


gulp.task('styles', function () {
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('jquery', function () {
    return gulp.src('./node_modules/jquery/src')
        .pipe(jquery({
            flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('./public/vendor/'));
    // creates ./public/vendor/jquery.custom.js
});

gulp.task('serve', function () {

	browserSync.init({
		server: {
			baseDir: './'
		}
	}); 

	gulp.watch('./js/*.js', ['jquery']);
	gulp.watch('./scss/*.scss', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('will-local', ['styles', 'serve']);