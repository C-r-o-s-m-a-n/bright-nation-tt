const gulp = require('gulp')
const autoprefixer = (...args) => import('autoprefixer').then(({default: fetch}) => fetch(...args));
const sass = require('gulp-sass')(require('sass'))
const webpack = require('webpack-stream')
const uglify = require('gulp-uglify')
const watch = require('gulp-watch')

// Sass
gulp.task('sass', function (done) {
     gulp.src('assets/scss/*.scss')
		 .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
         .pipe(gulp.dest('assets/css'));

	done();
 });

//autoprefixer
gulp.task('autoprefixer', function (done) {
     return gulp.src('assets/css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('webpack', function () {
	return gulp.src('assets/js/main.js')
		.pipe(webpack({
			mode: 'production',
			entry: './assets/js/main.js',
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
		.pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function () {
	gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
	gulp.watch(['assets/js/**/*.js', '!assets/js/bundle.js'], gulp.series('webpack'));
});

gulp.task('default', gulp.series('sass', 'webpack', 'watch'));