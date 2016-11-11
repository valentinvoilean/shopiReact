// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

export default {
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
        'node_modules/jquery/dist/jquery.min.js',
        'tests/index.js'
    ],
    preprocessors: {
        'tests/index.js': ['webpack', 'sourcemap']
    },
    webpack: { //kind of a copy of your webpack config
        devtool: 'inline-source-map', //just do inline source maps instead of the default
        module: {
            loaders: [
                { test: /\.jsx$/, loader: 'babel-loader' }
            ]
        }
    },
    reporters: ['coverage', 'spec'],
    coverageReporter: {
        dir: 'coverage/',
        reporters: [{type: 'html'}]
    }
};
