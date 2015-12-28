var webpack = require('webpack');

module.exports = function (config) {

    config.set({

        captureTimeout: 5 * 60 * 1000,

        frameworks: ['mocha', 'sinon'],

        plugins: [
            require('karma-webpack'),
            require('karma-live-preprocessor'),
            require('karma-chrome-launcher'),
            require('karma-sourcemap-loader'),
            require('karma-mocha'),
            require('karma-sinon')
        ],

        files: [
            'public/test/requirements/karma.js',
            'public/test/integration/**/*.test.js'
        ],

        exclude: [],

        preprocessors: {
            '**/*.js': ['webpack', 'sourcemap']
        },

        browsers: ['Chrome'],

        // Exit the test runner as well when the test suite returns.
        singleRun: false,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        webpack: {

            devtool: 'inline-source-map',

            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    },
                    { test: /\.(css|scss|sass|styl|less|ttf|woff|woff2|eot|svg|png|jpg)$/, loader: 'null' }
                ]
            }

        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }

    });

};