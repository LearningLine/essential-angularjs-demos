var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');

//gulp.task('bower', function() {
//    return bower()
//        .pipe(gulp.dest('wwwroot/lib/'))
//});


gulp.task('mainBowerFiles', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('wwwroot/lib/'))
});

gulp.task('default',['mainBowerFiles']);