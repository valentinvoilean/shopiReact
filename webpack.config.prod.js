const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.config.common');

module.exports = merge(webpackConfigCommon, {
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')}
        ]
    },
    plugins: [
        new ExtractTextPlugin('helpers.css', {allChunks: false}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js.liquid'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            minimize: true,
            sourceMap: true
        })
    ]
});
