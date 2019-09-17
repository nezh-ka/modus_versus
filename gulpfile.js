// 

var gulp = require('gulp')
var pug = require('gulp-pug');
var less = require('gulp-less')
var concat = require('gulp-concat')

gulp.task('copy-images', function() {
    gulp.src(['./images/**/*.*'])
    .pipe(gulp.dest('./build/images/'))
});

gulp.task('copy-fonts', function() {
    gulp.src(['./fonts/**/*.*'])
    .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('pug', function() {
    gulp.src(['./views/**/*.*'])
    .pipe(pug())
    .pipe(gulp.dest('./build/views/'))
});

gulp.task('less', function() {
    gulp.src(['./styles/**/*.*'])
    .pipe(concat('build.less'))
    .pipe(less())
    .pipe(gulp.dest('./build/css/'))
});

gulp.task('js', function() {
    gulp.src(['./scripts/**/*.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./build/js/'))
});

gulp.task('default', function() {
    gulp.start('js');
    gulp.start('pug');
    gulp.start('less');
    gulp.start('copy-images');
    gulp.start('copy-fonts');
});

gulp.task('watch', function () {
    gulp.start('default');
    gulp.watch(['scripts/**/*.js'], ['js'])
    gulp.watch(['styles/**/*.less'], ['less'])
   gulp.watch(['views/**/*.pug'], ['pug'])
});
