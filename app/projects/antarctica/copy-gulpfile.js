// // Sass configuration
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync');
// // var reload = browserSync.reload;

// gulp.task('sass', function() {
//     // console.log('Hello Mannar');
//     gulp.src('./10antarctica/sass/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('10antarctica/css'))
// });

// gulp.task('default', ['sass'], function() {
//     gulp.watch('./10antarctica/sass/*.scss', ['sass']);
// })

(function() {

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
            {baseDir: "./10antarctica"}};
  
    var watcherAnnounce = function watcherAnnounce(event) {
      // Prints e.g. "File changed: path/to/filename.ext".
      console.log('File ' + event.type + ': ' + event.path);
    };
  
  
    // ###########################################################################
    // TASKS.
  
    // Compile SCSS for antarctica landing-page
    gulp.task('styles:10antarctica', function() {
      return gulp.src('./10antarctica/sass/*.scss')
        //      .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(error) {
          gutil.log(error);
          this.emit('end');
        }))
        //      .pipe(sourcemaps.write()) //.pipe(sourcemaps.write(undefined, { sourceRoot: null }))
        .pipe(prefix({
          browsers: ['last 2 versions', 'ie 11', 'Android 4', 'Safari 6', 'iOS 8']
        }))
        .pipe(gulp.dest('10antarctica/css'))
        .pipe(reload({
          stream: true
        }));
    });
  
    gulp.task('antarctica', ['styles:10antarctica'], function() {
      browserSync(browserSyncConfig);
  
      gulp.task('styles:watch', ['styles:10antarctica'], reload);
  
      gulp.watch(['./10antarctica/sass/*.scss'], ['styles:watch'])
        .on('change', watcherAnnounce);
    });
  
    gulp.task('default', ['antarctica']);
  
  })();
  