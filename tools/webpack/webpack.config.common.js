const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    context: path.resolve('.'),
    entry: {
        vendors: [
            'babel-polyfill',
            'modernizr',
            'picturefill',
            'react',
            'react-match-media',
            'react-redux',
            'react-addons-css-transition-group',
            'redux',
            'redux-thunk',
            'axios',
            'classnames',
        ],
        main: 'index.jsx',
        headerConfig: 'screens/HeaderConfig/index.jsx',
    },
    output: {
        path: path.resolve('./dist/assets'),
        publicPath: '/dist/assets',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {enforce: 'pre', test: /\.jsx?$/, include: path.resolve('./src'), loader: 'eslint-loader'},
            {test: /\.jsx?$/, include: path.resolve('./src'), loader: 'babel-loader'},
            {test: /\.svg$/, loader: 'svg-sprite-loader'},
            {test: /\.modernizrrc$/, loader: 'webpack-modernizr-loader'},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg'],
        modules: [
            path.resolve('./src'),
            'node_modules',
        ],
        alias: {
            styles: path.resolve('./src/static/styles'),
            modernizr$: path.resolve('./.modernizrrc'),
        },
    },
    target: 'web',
    performance: {
        hints: false,
    },
    stats: {
        version: false,
        hash: false,
        chunks: false,
        children: false,
    },
    plugins: [
        new ProgressBarPlugin(),
    ],
};
