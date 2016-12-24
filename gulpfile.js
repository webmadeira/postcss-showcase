const gulp = require('gulp');
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

/* PostCSS plugins */
const pcImport = require('postcss-import')({ root: './style/app.pcss' })
const styleGuide = require('postcss-style-guide')
const pcNested = require('postcss-nested')
const pcCssNext = require('postcss-cssnext')

gulp.task('default', () => {
  const processors = [
    pcImport,
    pcNested,
    styleGuide({
      project: 'Project name',
      dest: 'styleguide/index.html',
      showCode: true,
    }),
    pcCssNext,
  ]

  return gulp
    .src('./style/app.pcss')
    .pipe(postcss(processors))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist'))
})