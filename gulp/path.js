"use strict";

import path from 'path';

const build = './dest/';
const root = path.dirname(__dirname);

const paths = {
    root: root,
    indexHtml: './src/angular/index.html',
    build: build,
    tmp: ".tmp/build.js",
    tests: "./test/jasmine/**/*.js",
    karmaConfig: `${root}/karma.config.js`,
    baseDir: [
        './',
        './src/angular/',
        './jspm_packages'
    ],
    baseDirBundle: [
        build
    ]
};

export default paths;