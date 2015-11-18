module.exports = function (config) {
    config.set({
        frameworks: ['jspm', 'jasmine'],
        plugins: ['karma-jspm', 'karma-jasmine', 'karma-phantomjs-launcher'],
        jspm: {
            config: 'jspm.config.js',
            loadFiles: ['src/angular/app.js', 'test/jasmine/simple*.Spec.js'],
            //serveFiles: ['src/angular/**/*.js']
        },
        proxies: {
            '/test/': '/base/test/',
            '/src/angular/': '/base/src/angular/',
            '/jspm_packages/': '/base/jspm_packages/'
        },
        browsers: ['PhantomJS'],
        browserNoActivityTimeout: 50000
    });
};