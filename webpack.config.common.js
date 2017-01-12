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
            'react-dom',
            'react-match-media',
            'react-redux',
            'redux',
            'classnames',
            'jquery'
        ],
        headerConfig: 'App/features/HeaderConfig/index.jsx',
        main: 'main.js'
    },
    output: {
        path: path.resolve(__dirname, 'theme/assets'),
        publicPath: '/theme/assets/',
        filename: '[name].js.liquid',
        chunkFilename: '[name].js.liquid'
    },
    module: {
        noParse: /jquery|backbone/,
        rules: [
            {enforce: 'pre', test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'eslint-loader'},
            {test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'babel-loader'},
            {test: /\.svg$/, loader: 'svg-sprite-loader'},
            {test: /\.modernizrrc$/, loader: 'webpack-modernizr-loader'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.(woff|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'base64-font-loader'}
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
            jquery: 'jquery/dist/jquery.min.js',
            modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
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
