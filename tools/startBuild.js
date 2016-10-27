import browserSync from 'browser-sync';
import webpack from 'webpack';

import config from '../webpack.config';
import browserSyncConfig from '../bs-config';

const compiler = webpack(config);

browserSync.create();
browserSync.init(browserSyncConfig);

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, (err, stats) => {
    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
});

compiler.plugin('done', (stats) => {
    if (!(stats.hasErrors() || stats.hasWarnings())) {
        browserSync.reload();
    }
});
