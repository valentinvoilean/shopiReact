const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '.'),
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
            'classnames'
        ],
        headerConfig: 'features/HeaderConfig/index.jsx',
        main: 'index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {enforce: 'pre', test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'eslint-loader'},
            {test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'babel-loader'},
            {test: /\.svg$/, loader: 'svg-sprite-loader'},
            {test: /\.modernizrrc$/, loader: 'webpack-modernizr-loader'},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg'],
        modules: [
            path.join(__dirname, 'src/js'),
            'node_modules'
        ],
        alias: {
            svg: path.resolve(__dirname, 'src/svg'),
            modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
    },
    target: 'web',
    performance: {
        hints: false
    },
    stats: {
        version: false,
        hash: false,
        chunks: false
    }
};
