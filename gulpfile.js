// gulpfile.js
var gulp = require('gulp')
,imagemin = require('gulp-imagemin');

gulp.task('build-img', function() {

// linha quebrada para ajudar na leitura
gulp.src('assets/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('assets/img'));
});