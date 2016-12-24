const gulp = require('gulp');
const rename = require('gulp-rename')

gulp.task('default', () => {
  const processors = [
  ]

  return gulp
    .src('./style/app.pcss')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist'))
})