"use strict";

import paths from './path';
import jasmineConfig from '../jasmine.config';
import {Server} from 'karma';
import argv from 'argv';

function init(gulp, $) {

    var COLORS = $.util.colors,
        LOG = $.util.log;

    gulp.task('karma', (cb) => {
        const server = new Server({
            configFile: paths.karmaConfig,
            browsers: 'PhantomJS'.split(),
            singleRun: !argv.watch,
            autoWatch: !!argv.watch
        }, function (code) {
            // make sure failed karma tests cause gulp to exit non-zero
            if (code === 1) {
                LOG(COLORS.red('Error: unit test failed '));
                return process.exit(1);
            }
            cb();
        });
        server.start();
    });
}

module.exports = init;