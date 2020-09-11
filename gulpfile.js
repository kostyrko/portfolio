const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return gulp.src('src/sass/main.scss') 
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map' 
    }).on("error", sass.logError))
    .pipe(sourcemaps.write()) 
    .pipe(gulp.dest('src/css'))  
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', gulp.series("sass"));
    gulp.watch('src/sass/sections/*.scss', gulp.series("sass"));
});