const webpack = require('webpack');
const path = require('path');

require('source-map-support').install();

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine', 'source-map-support'],
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'tests/index.js'
        ],
        preprocessors: {
            'tests/index.js': ['webpack', 'sourcemap']
        },
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            resolve: {
                extensions: ['', '.js', '.svg'],
                modulesDirectories: ['src/js', 'node_modules'],
                alias: {
                    'HeaderConfigApp': 'react/HeaderConfigApp',
                    'HeaderApp': 'react/HeaderApp',
                    'jquery': 'jquery/dist/jquery.min.js',
                    modernizr$: path.resolve(__dirname, '.modernizrrc')
                }
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                })
            ],
            module: {
                noParse: ['jquery'],
                loaders: [
                    {test: /\.js?$/, include: `${__dirname}/src/js`, loader: 'babel-loader'},
                    {test: /\.svg$/, loader: 'svg-sprite'},
                    {test: /\.modernizrrc$/, loader: 'modernizr'},
                    {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
                    {
                        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: 'url?limit=10000&mimetype=application/font-woff'
                    },
                    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
                    {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
                    {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
                    {test: /\.scss$/, loader: 'style!css!autoprefixer!sass'},
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.json$/, loader: 'json'}
                ],
                postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
                    test: /^((?!spec).)*\.js$/,
                    include: `${__dirname}/src/js`,
                    loader: 'istanbul-instrumenter'
                }]
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        reporters: ['coverage', 'spec'],
        coverageReporter: {
            reporters: [{type: 'text'}, {type: 'html'}]
        }
    });
};
