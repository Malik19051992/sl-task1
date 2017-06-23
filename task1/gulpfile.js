'use strict'

const gulp = require('gulp')

gulp.task('default',function () {
    return gulp.src('./**/*.*')//[....*{js,css},'!node_modules/**'],{read:false}
        //.pipe(gulp.dest('dest'));
        .pipe(gulp.dest(function (file) {
            return file.extname=='.js'?'js':
                file.extname=='.css'?'css':'dest'

        }));

})

gulp.task('style',function () {
    return gulp.src('resources/**/*.css')

})