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
            {test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]'},
            {test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]'},
            {test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]'},
            {test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]'}
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
