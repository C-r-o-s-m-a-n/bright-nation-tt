const gulp = require('gulp')
const {createAutoprefixerTask} = require('./general_tasks/autoprefixer-task.js')
const {createSassTask} = require('./general_tasks/sass-task.js')

//autoprefixer
createAutoprefixerTask('autoprefixerTheme', '../assets/css/*.css', '../assets/css')

// Sass
createSassTask('sassTheme', '../assets/scss/*.scss', '../assets/css')

gulp.task('watchTheme', function () {
	gulp.watch('../assets/scss/**/*.scss', gulp.series('sassTheme', 'autoprefixerTheme'));
});

module.exports = {
	sassTheme: gulp.series('sassTheme'),
	watchTheme: gulp.series('watchTheme'),
	autoprefixerTheme: gulp.series('autoprefixerTheme')
};