var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('default', function () {
    // by default, gulp would pick `assets/css` as the base,
    // so we need to set it explicitly:
    return gulp.src(['dev/css/*.css', 'dev/js/*.js'], {base: 'dev'})
        .pipe(gulp.dest('build/css'))  // copy original assets to build dir
        .pipe(rev())
        .pipe(gulp.dest('build/css'))  // write rev'd assets to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/css')); // write manifest to build dir
});