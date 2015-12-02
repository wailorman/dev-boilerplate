var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var browserSync = require('browser-sync').create();

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(require('./webpack.config'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        //callback();
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./**/*.html', './dist/*']).on('change', browserSync.reload);
});

gulp.task('serve', ['webpack', 'browser-sync']);