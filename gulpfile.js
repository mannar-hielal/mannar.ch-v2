(function () {

    'use strict';

    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        prefix = require('gulp-autoprefixer'),
        sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps'),
        gutil = require('gulp-util'),
        rename = require('gulp-rename'),
        runSequence = require('run-sequence'),
        reload = browserSync.reload;


    // ###########################################################################
    // CONFIG.

    var buildConfig = {
        'reloadOnJs': true
    };

    var browserSyncConfig = {
        server:
            { baseDir: "./app" }
    };

    var watcherAnnounce = function watcherAnnounce(event) {
        // Prints e.g. "File changed: path/to/filename.ext".
        console.log('File ' + event.type + ': ' + event.path);
    };


    // ###########################################################################
    // TASKS.

    // Compile SCSS for antarctica landing-page
    gulp.task('styles:app', function () {
        return gulp.src('./app/sass/**/*.scss')
            //      .pipe(sourcemaps.init())
            .pipe(sass().on('error', function (error) {
                gutil.log(error);
                this.emit('end');
            }))
            //      .pipe(sourcemaps.write()) //.pipe(sourcemaps.write(undefined, { sourceRoot: null }))
            .pipe(prefix({
                browsers: ['last 2 versions', 'ie 11', 'Android 4', 'Safari 6', 'iOS 8']
            }))
            .pipe(gulp.dest('app/css'))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('app', ['styles:app'], function () {
        browserSync(browserSyncConfig);

        gulp.task('styles:watch', ['styles:app'], reload);

        gulp.watch(['./app/sass/**/*.scss'], ['styles:watch'])
            .on('change', watcherAnnounce);
    });

    gulp.task('default', ['app']);

})();