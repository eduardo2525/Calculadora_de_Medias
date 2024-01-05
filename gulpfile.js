const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('.maps'))
        .pipe(gulp.dest('./build/styles'))
}

function imagens() {
    return gulp.src('./source/imagens/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

exports.default = gulp.parallel(styles, imagens);

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles));
}