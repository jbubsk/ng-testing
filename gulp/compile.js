import paths from './path';

module.exports = function (gulp, $) {
    var COLORS = $.util.colors,
        LOG = $.util.log;

    function notifyOnError(error) {
        console.log(error);
    }

    function formatPercent(num, precision) {
        return (num * 100).toFixed(precision);
    }

    function bytediffFormatter(data) {
        var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
        return COLORS.yellow(data.fileName + " went from " + (data.startSize / 1000).toFixed(2) + " kB to " + (data.endSize / 1000).toFixed(2) + " kB and is " + formatPercent(1 - data.percent, 2) + " % difference");
    }

    gulp.task('bundle', function () {
        return gulp.src('')
            .pipe($.shell([
                "jspm bundle-sfx app " + paths.tmp
            ]))
            .on('error', notifyOnError);
    });

    gulp.task('compile', ['bundle'], function () {
        return gulp.src(paths.indexHtml)
            .pipe($.inject(gulp.src(paths.tmp)), {read: false})
            .pipe($.usemin({
                css: [
                    $.bytediff.start(),
                    $.minifyCss({keepSpecialComments: 0}),
                    $.bytediff.stop(bytediffFormatter),
                    $.rev()
                ],
                js: [
                    $.bytediff.start(),
                    //$.uglify(),
                    $.bytediff.stop(bytediffFormatter),
                    $.rev()
                ],
                html: [
                    $.bytediff.start(),
                    $.minifyHtml({empty: true}),
                    $.bytediff.stop(bytediffFormatter)
                ]
            }))
            .pipe(gulp.dest(paths.build));
    });
};