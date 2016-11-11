import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
        resolve: {
            extensions: ['', '.js', '.jsx', '.svg'],
            modulesDirectories: ['src/js', 'node_modules'],
            alias: {
                'HeaderConfigApp': 'react/HeaderConfigApp',
                'HeaderApp': 'react/HeaderApp',
                'jquery': 'jquery/dist/jquery.min.js',
                modernizr$: path.resolve(__dirname, '.modernizrrc') }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new ExtractTextPlugin('helpers.css', {allChunks: false})
        ],
        module: {
            noParse: ['jquery'],
            loaders: [
                {test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'babel-loader'},
                {test: /\.svg$/, loader: 'svg-sprite'},
                {test: /\.modernizrrc$/, loader: 'modernizr'},
                {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
                {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
                {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
                {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
                {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
                {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')},
                {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer!resolve-url!sass?sourceMap')},
                {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
            ]
        }
    },
    reporters: ['coverage', 'spec'],
    coverageReporter: {
        dir: 'coverage/',
        reporters: [{type: 'html'}]
    }
};
