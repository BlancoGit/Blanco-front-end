
var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() { 
	return gulp.src(['app/sass/**/*.sass']) 
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
		.pipe(autoprefixer(['last 5 versions', '>1%', 'ie 10'], {cascade:true}))
		.pipe(gulp.dest('app/css')) 
});

gulp.task('watch', function() {
	gulp.watch(['app/sass/**/*.sass'], ['sass']);
});

gulp.task('default', ['watch']);