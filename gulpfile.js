const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}

exports.default = gulp.parallel(styles);

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles))
}