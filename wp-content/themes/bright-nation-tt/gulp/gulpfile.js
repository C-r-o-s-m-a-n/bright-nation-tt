const gulp = require('gulp')
const pluginPostByDateConfig = require('./plugin-post-by-date.js')
const themeTasks = require('./theme.js')

//all task for theme
gulp.task('sassTheme', themeTasks.sassTheme);
gulp.task('watchTheme', themeTasks.watchTheme);
gulp.task('autoprefixerTheme', themeTasks.autoprefixerTheme);
gulp.task('themeDefault', gulp.series('sassTheme', 'autoprefixerTheme', 'watchTheme'));

// add all tasks for plugin-post-by-date
gulp.task('sassPostByDate', pluginPostByDateConfig.sassPostByDate);
gulp.task('autoprefixerPostByDate', pluginPostByDateConfig.autoprefixerPostByDate);
gulp.task('webpackPostByDate', pluginPostByDateConfig.webpackPostByDate);
gulp.task('watchPostByDate', pluginPostByDateConfig.watchPostByDate);
gulp.task('postByDateDefault', gulp.series('sassPostByDate', 'autoprefixerPostByDate', 'webpackPostByDate', 'watchPostByDate'));

gulp.task('default', gulp.parallel('themeDefault', 'postByDateDefault'));