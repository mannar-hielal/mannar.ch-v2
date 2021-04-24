update node:
https://nodejs.org/en/

install gulp globally on your computer:
npm install gulp -g

create the json file:
$ npm init
npm set init-license="BSD-2-Clause"

install gulp locally on this project, it installs node_modules:
npm install gulp --save-dev

copy a gulp file from another project and paste it where package.json is.

edit the pathes in gulp.js to match the new project

install the required packages:
browsersync locally:
npm install browser-sync --save-dev

gulp-sass:
npm install gulp-sass --save-dev


gulp-sourcemaps:
npm install gulp-sourcemaps --save-dev

gulp-rename:
npm install gulp-rename --save-dev

run-sequence:
npm install run-sequence --save-dev

install autoprefixer
npm install --save-dev gulp-autoprefixer

npm i gulp-util
run gulp


P.S:
if you work with mysql:

first:$ npm install mysql

second: add this to gulpfile.js:


    var mysql= require('mysql');
    var connection= mysql.createConnection({
      host: 'localhost:8887',
      user: 'root',
      password: 'root',
      database: 'name of your database'
    });