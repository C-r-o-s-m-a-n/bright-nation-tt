const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const createSassTask = (taskName, pathToFiles, outputFolder) =>{
	gulp.task(taskName, function (done) {
		gulp.src(pathToFiles)
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(gulp.dest(outputFolder));

		done();
	});
}

module.exports = {createSassTask}
