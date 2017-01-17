const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
require('colors');

const oldDir = './dist/assets';
const newDir = './theme/assets';

const webpackProdConfig = require('../webpack.config.prod');
const compiler = webpack(webpackProdConfig);

function moveFilesToAssets() {
    glob(`${oldDir}/**/*.*`, (err, files) => {
        let processed = 0;

        files.forEach(function(file) {
            let filename = path.basename(file);
            fs.createReadStream(file).pipe(fs.createWriteStream(`${newDir}/${filename.toLowerCase()}.liquid`));
            processed++;
        });

        console.log(`${processed} files moved to Assets folder.`.blue);
    });
}

function handleFatalError(err) {
    console.log('FATAL ERROR: '.red, err.red);
}

function handleSoftErrors(err) {
    console.log('ERROR: '.red, err.red);
}

function handleWarnings(err) {
    console.log('WARNING: '.green, err.green);
}

function compilerStatus(err, stats) {
    if (err) {
        return handleFatalError(err);
    }

    const jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
        return handleSoftErrors(jsonStats.errors);
    }

    if (jsonStats.warnings.length > 0) {
        handleWarnings(jsonStats.warnings);
    }

    console.log(stats.toString({
        colors: true,
        version: false,
        hash: false,
        chunks: false,
        children: false
    }));

    moveFilesToAssets();
}

if (process.argv[2]) {
    console.log('Webpack: Watching files..'.green);

    compiler.watch({
        aggregateTimeout: 300,
        poll: true
    }, compilerStatus);
} else {
    compiler.run(compilerStatus);
}
