const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const webpack = require('webpack-stream')
const watch = require('gulp-watch')


//autoprefixer
gulp.task('autoprefixerPostByDate', function (){
	const autoprefixer = require('autoprefixer')
	const postcss = require('gulp-postcss')

	return gulp.src('../../../plugins/posts-by-date/assets/css/*.css')
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('../../../plugins/posts-by-date/assets/css'))
})

// Sass
gulp.task('sassPostByDate', function (done) {
	gulp.src('../../../plugins/posts-by-date/assets/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('../../../plugins/posts-by-date/assets/css'));

	done();
});

gulp.task('webpackPostByDate', function () {
	return gulp.src('../../../plugins/posts-by-date/assets/js/main.js')
		.pipe(webpack({
			mode: 'production',
			entry: '../../../plugins/posts-by-date/assets/js/main.js',
			output: {
				filename: 'bundle.js',
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
							},
						},
					},
				],
			},
		}))
		.pipe(gulp.dest('../../../plugins/posts-by-date/assets/js'));
});

gulp.task('watchPostByDate', function () {
	gulp.watch('../../../plugins/posts-by-date/assets/scss/**/*.scss', gulp.series('sassPostByDate'));
	gulp.watch(['../../../plugins/posts-by-date/assets/js/**/*.js', '!../../../plugins/posts-by-date/assets/js/bundle.js'], gulp.series('webpackPostByDate'));
});

module.exports = {
	sassPostByDate: gulp.series('sassPostByDate'),
	autoprefixerPostByDate: gulp.series('autoprefixerPostByDate'),
	webpackPostByDate: gulp.series('webpackPostByDate'),
	watchPostByDate: gulp.series('watchPostByDate'),
};