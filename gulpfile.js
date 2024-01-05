const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')

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

function scritps() {
    return gulp.src('./source/scripts/script.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = gulp.parallel(styles, imagens, scritps);

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./source/scripts/script.js', gulp.parallel(scritps));
}