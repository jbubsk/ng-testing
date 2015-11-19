module.exports = function (config) {
    config.set({
        frameworks: [
            'jspm',
            'jasmine',
            'phantomjs-shim'
        ],
        plugins: [
            'karma-jspm',
            'karma-jasmine',
            'karma-phantomjs-shim',
            'karma-phantomjs-launcher'
        ],
        jspm: {
            config: 'jspm.config.js',
            loadFiles: ['src/angular/app.js', 'src/angular/**/*.spec.js'],
            serveFiles: ['src/angular/**/*.+(js|html)']
        },
        proxies: {
            '/test/': '/base/test/',
            '/src/angular/': '/base/src/angular/',
            '/jspm_packages/': '/base/jspm_packages/'
        },
        browsers: ['PhantomJS'],
        browserNoActivityTimeout: 5000
    });
};