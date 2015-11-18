import browserSync from 'browser-sync';
import path from './path';

module.exports = function (gulp) {

    gulp.task('watch', function (done) {
        gulp.watch('./app/**/*.*', browserSync.reload);
        done();
    });

    gulp.task('serve', ['watch'], function (done) {
        browserSync({
            open: false,
            server: {
                baseDir: path.baseDir
            }
        }, done);
    });

    gulp.task('serve-bundle', ['watch'], function (done) {
        browserSync({
            open: false,
            server: {
                baseDir: path.baseDirBundle
            }
        }, done);
    });
};
