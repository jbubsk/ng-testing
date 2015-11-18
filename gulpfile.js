'use strict';

require('babel/register');

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

require('./gulp/test')(gulp, $);
require('./gulp/serve')(gulp, $);