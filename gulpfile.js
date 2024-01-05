const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');

function styles() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('.maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.default = gulp.parallel(styles);

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles))
}