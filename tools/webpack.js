const webpack = require('webpack');
require('colors');

const webpackProdConfig = require('../webpack.config.prod');
const compiler = webpack(webpackProdConfig);

const compilerStatus = require('./webpack/compilerStatus');
const watchJS = require('./webpack/watchJs');

console.log('Webpack: Watching files..'.green);

setTimeout(watchJS, 0);

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, compilerStatus);

