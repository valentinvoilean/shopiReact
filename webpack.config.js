import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: true
};

export default {
    devtool: 'source-map',

    entry: {
        vendors: ['babel-polyfill', 'modernizr', 'picturefill', 'react', 'react-dom', 'react-match-media', 'react-redux', 'redux', 'redux-devtools-extension', 'jquery', 'jquery.currencies.js'],
        config: ['config.js'],
        main: ['index.js']
    },

    target: 'web', // necessary for https://webpack.github.io/docs/testing.html#compile-and-test

    output: {
        path: path.resolve(__dirname, 'theme/assets'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.svg'],
        modulesDirectories: ['src', 'node_modules'],
        alias: { 'jquery': 'jquery/dist/jquery.min.js', modernizr$: path.resolve(__dirname, '.modernizrrc') }
    },

    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.NoErrorsPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin('helpers.css', {allChunks: false})
    ],

    eslint: {
        failOnError: false
    },

    module: {
        noParse: ['jquery'],
        preLoaders: [{test: /\.js?$/, include: `${__dirname}/src`, loaders: ['eslint']}],
        loaders: [
            {test: /\.js?$/, include: `${__dirname}/src`, loader: 'babel-loader'},
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
};
