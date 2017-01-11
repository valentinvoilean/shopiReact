const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.config.common');

const webpackCommonDevSettings = {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        inline: true,
        hot: true,
        compress: true,
        host: '0.0.0.0',
        port: 8089,
        open: true
    },

    performance: {
        hints: false
    }
};

module.exports = [
    merge(webpackConfigCommon, webpackCommonDevSettings, {
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
        module: {
            rules: [
                {test: /\.scss$/, loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader'},
                {test: /\.css$/, loader: 'style-loader!css-loader'}
            ]
        }
    }),
    merge(webpackConfigCommon, webpackCommonDevSettings, {
        entry: { styles: './src/styles/theme.scss' },
        module: {
            rules: [
                {test: /\.scss$/, loader: 'style-loader!css-loader?sourceMap!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap'}
            ]
        }
    })
];
