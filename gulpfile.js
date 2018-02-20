'use strict';
const gulp = require('gulp');
const rename = require('gulp-rename');

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

gulp.task('copy:font:styles', () => {
  return gulp 
    .src('./govuk_template/source/assets/stylesheets/fonts.css')
    .pipe(rename('fonts.scss'))
    .pipe(gulp.dest('./src/sass'))
});

gulp.task('copy:font:styles:ie-8', () => {
  return gulp 
    .src('./govuk_template/source/assets/stylesheets/fonts-ie8.css.erb')
    .pipe(rename('fonts-ie8.scss'))
    .pipe(gulp.dest('./src/sass'))
});

gulp.task('font:styles', ['copy:font:styles', 'copy:font:styles:ie-8']);
gulp.task('default', ['copy:images', 'copy:styleheet:images', 'copy:fonts', 'copy:sass', 'font:styles']);
