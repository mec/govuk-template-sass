'use strict';
const gulp = require('gulp');
const urlAdjuster = require('gulp-css-replace-url');

gulp.task('copy:images', () => {
  return gulp.src('./govuk_template/source/assets/images/*.*').pipe(gulp.dest('./src/images'));
});

gulp.task('copy:styleheet:images', () => {
  return gulp
    .src('./govuk_template/source/assets/stylesheets/images/*.*')
    .pipe(gulp.dest('./src/images'));
});

gulp.task('copy:sass', () => {
  return gulp
    .src('./govuk_template/source/assets/stylesheets/**/*.scss')
    .pipe(gulp.dest('./src/sass'));
});

gulp.task('copy:fonts', () => {
  return gulp
    .src('./govuk_template/source/assets/stylesheets/fonts/*.eot')
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('default', ['copy:images', 'copy:styleheet:images', 'copy:fonts', 'copy:sass']);
