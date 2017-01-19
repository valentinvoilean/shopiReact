const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.config.common');
const path = require('path');

module.exports = merge(webpackConfigCommon, {
    //devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            query: {
                                sourceMap: false,
                                modules: true,
                                importLoaders: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'autoprefixer-loader',
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
            //sourceMap: true
        })
    ]
});
