var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scss',function(){
    return gulp.src('src/scss/main.scss')
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/scss/main.scss',['scss']);  
});