const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
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
            'jquery'
        ],
        headerConfig: 'App/features/HeaderConfig/index.jsx',
        main: 'main.js'
    },
    output: {
        path: path.resolve(__dirname, 'theme/assets'),
        publicPath: '/theme/assets/',
        filename: '[name].js'
    },
    module: {
        noParse: /jquery|backbone/,
        rules: [
            {enforce: 'pre', test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'eslint-loader'},
            {test: /\.jsx?$/, include: `${__dirname}/src/js`, loader: 'babel-loader'},
            {test: /\.svg$/, loader: 'svg-sprite-loader'},
            {test: /\.modernizrrc$/, loader: 'modernizr-loader!json-loader'},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader'})},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader'})}
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin({
            filename: 'helpers.css',
            allChunks: false
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.jsx/, // may apply this only for some modules
            options: {
                context: __dirname,
                eslint: {
                    failOnError: false
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ],
    target: 'web'
};
