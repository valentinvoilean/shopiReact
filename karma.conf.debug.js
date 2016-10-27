'use strict';

const path = require('path');

// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

module.exports = function (config) {
    config.set({
        autoWatch: true,
        singleRun: false,

        frameworks: ['jasmine'],

        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'tests/index.js'
        ],

        browsers: ['Chrome'],

        preprocessors: {
            'tests/index.js': ['webpack']
        },

        webpack: {
            devtool: 'inline-source-map',

            resolve: {
                extensions: ['', '.js', '.svg'],
                modulesDirectories: ['src', 'node_modules'],
                alias: {
                    'jquery': 'jquery/dist/jquery.min.js', //don't import all the module; use only the minified version
                    modernizr$: path.resolve(__dirname, '.modernizrrc')
                }
            },

            module: {
                preLoaders: [
                    // transpile all files except testing sources with babel as usual
                    {
                        test: /\.js$/,
                        exclude: [
                            path.resolve('node_modules')
                        ],
                        loader: 'babel'
                    }
                ],
                loaders: [
                    {
                        test: /\.modernizrrc$/,
                        loader: "modernizr"
                    }
                ]
            }
        },

        reporters: ['spec']
    });
};
