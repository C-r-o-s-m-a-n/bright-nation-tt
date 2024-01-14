const gulp = require('gulp')

const createAutoprefixerTask = (taskName, pathToFiles, outputFolder) =>{
	//autoprefixer
	gulp.task(taskName, function (){
		const autoprefixer = require('autoprefixer')
		const postcss = require('gulp-postcss')

		return gulp.src(pathToFiles)
			.pipe(postcss([ autoprefixer() ]))
			.pipe(gulp.dest(outputFolder))
	})
}

module.exports = {createAutoprefixerTask}


