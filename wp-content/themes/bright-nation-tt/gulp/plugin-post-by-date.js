const gulp = require('gulp')
const webpack = require('webpack-stream')
const {createAutoprefixerTask} = require('./general_tasks/autoprefixer-task.js')
const {createSassTask} = require('./general_tasks/sass-task.js')

//autoprefixer
createAutoprefixerTask('autoprefixerPostByDate', '../../../plugins/posts-by-date/assets/css/*.css', '../../../plugins/posts-by-date/assets/css')

// Sass
createSassTask('sassPostByDate', '../../../plugins/posts-by-date/assets/scss/*.scss', '../../../plugins/posts-by-date/assets/css')

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
	gulp.watch('../../../plugins/posts-by-date/assets/scss/**/*.scss', gulp.series('sassPostByDate', 'autoprefixerPostByDate'));
	gulp.watch(['../../../plugins/posts-by-date/assets/js/**/*.js', '!../../../plugins/posts-by-date/assets/js/bundle.js'], gulp.series('webpackPostByDate'));
});

module.exports = {
	sassPostByDate: gulp.series('sassPostByDate'),
	autoprefixerPostByDate: gulp.series('autoprefixerPostByDate'),
	webpackPostByDate: gulp.series('webpackPostByDate'),
	watchPostByDate: gulp.series('watchPostByDate'),
};