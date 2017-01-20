const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.config.common');

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
                                importLoaders: 1,
                                minimize: true,
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
            filename: '../../theme/assets/[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['main', 'vendors'],
            filename: '[name].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false,
            output: {
                quote_style: 3
            }
            //sourceMap: true
        })
    ]
});
