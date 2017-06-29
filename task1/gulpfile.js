"use strict";

const gulp = require("gulp");
const del = require("del");
const typeScript = require('gulp-typescript');
var css = require('gulp-css');
var html = require('gulp-html');
const tscConfig = require('./tsconfig.json');

//const sourcemaps = require('gulp-sourcemaps');


gulp.task('clean', () => {
    return del("dest/**/*");
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src(['app/**/*.ts', "!app/**/*.spec.ts"])
        .pipe(typeScript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dest/app'));
});

gulp.task('css', function(){
    return gulp.src(["**/*.css","!node_modules/**/*","!dest/**/*"])
        //.pipe(cssMin())
        .pipe(gulp.dest('dest/'));
});

gulp.task('html', function() {
    return gulp.src(["**/*.html","!node_modules/**/*","!dest/**/*"])
        //.pipe(validator())
        .pipe(gulp.dest('dest/'));
});

gulp.task("libs", () => {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'angular2/bundles/angular2-polyfills.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js'
    ], {cwd: "node_modules/**"})
        .pipe(gulp.dest("dest/lib"));
});


gulp.task('build', ['compile', 'css','html', 'libs']);
gulp.task('default', ['build']);
