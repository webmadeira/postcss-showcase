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


















/* PostCSS plugins */
/*
const pcCssNext = require('postcss-cssnext')
const pcImport = require('postcss-import')
const styleGuide = require('postcss-style-guide')

styleGuide({
    project: 'PostCSS showcase',
    dest: 'styleguide/index.html',
    showCode: true,
  }),
*/