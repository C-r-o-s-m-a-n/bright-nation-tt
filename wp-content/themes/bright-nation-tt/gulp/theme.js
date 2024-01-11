const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

//autoprefixer
gulp.task('autoprefixerTheme', function (){
	const autoprefixer = require('autoprefixer')
	const postcss = require('gulp-postcss')

	return gulp.src('../assets/css/*.css')
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('../assets/css'))
})

// Sass
gulp.task('sassTheme', function (done) {
	gulp.src('../assets/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('../assets/css'));

	done();
});

gulp.task('watchTheme', function () {
	gulp.watch('../assets/scss/**/*.scss', gulp.series('sassTheme'));
});

module.exports = {
	sassTheme: gulp.series('sassTheme'),
	watchTheme: gulp.series('watchTheme'),
	autoprefixerTheme: gulp.series('autoprefixerTheme'),
};