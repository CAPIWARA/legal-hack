const gulp = require('gulp')
const postcss = require('gulp-postcss')
const webpack = require('gulp-webpack')

gulp.task('build:html', () => {
  const reference = gulp.src('./src/*.html')

  reference
    .pipe(gulp.dest('./dist'))
})

gulp.task('build:css', () => {
  const reference = gulp.src('./src/styles.css')

  reference
    .pipe(postcss())
    .pipe(gulp.dest('./dist/style.css'))
})

gulp.task('build:js', () => {
  const reference = gulp.src('./src/main.js')

  reference
    .pipe(webpack({
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['build:html', 'build:css', 'build:js'])
