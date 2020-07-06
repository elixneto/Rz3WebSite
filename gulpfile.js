var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function () {
    return gulp.src('./src/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('assets', function () {
    return gulp.src(['./src/assets/**/*'])
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('favicon', function () {
    return gulp.src('./src/favicon.ico')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.parallel('pug', 'assets', 'favicon'));