var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('mainBowerFiles', function () {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap*.js',
                        './dist/css/*.*',
                        './dist/fonts/*.*'
                    ]
                }
            }
        }))
        .pipe(gulp.dest('./Public/Libs/'))
});

gulp.task('default', ['mainBowerFiles']);
