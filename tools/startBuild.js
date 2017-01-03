const browserSync = require('browser-sync');
const webpack = require('webpack');

const webpackConfig = require('../webpack.config');
const browserSyncConfig = require('../bs-config');

const compiler = webpack(webpackConfig);

browserSync.create();
browserSync.init(browserSyncConfig);

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, (err, stats) => {
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});

compiler.plugin('done', (stats) => {
    if (!(stats.hasErrors() || stats.hasWarnings())) {
        browserSync.reload();
    }
});
