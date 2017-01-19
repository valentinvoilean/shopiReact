const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
require('colors');

const oldDir = './dist/assets';
const newDir = './theme/assets';

const webpackProdConfig = require('../webpack.config.prod');
const watch = require('node-watch');
const compiler = webpack(webpackProdConfig);

const filter = function(pattern, fn) {
    return function(filename) {
        if (pattern.test(filename)) {
            fn(filename);
        }
    };
};

function moveFileToAssetsFolder(file) {
    let filename = path.basename(file);
    fs.createReadStream(file).pipe(fs.createWriteStream(`${newDir}/${filename}.liquid`));

    console.log(`The file ${file}.liquid has been moved to Assets folder.`.yellow);
}


function compilerStatus(err, stats) {
    if (err) {
        return console.log('FATAL ERROR: '.red, err.red);
    }

    const jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
        return console.log('ERROR: '.red, err.red);
    }

    if (jsonStats.warnings.length > 0) {
        console.log('WARNING: '.green, err.green);
    }

    console.log(stats.toString({
        colors: true,
        version: false,
        hash: false,
        chunks: false,
        children: false
    }));
}

function watchJS() {
    console.log('Webpack: Watching JS chunks..'.green);
    watch(oldDir, {recursive: true}, filter(/\.js$/, function(filename) {
        console.log(`The file ${filename} has been changed`.blue);
        moveFileToAssetsFolder(filename);
    }));
}

console.log('Webpack: Watching files..'.green);

setTimeout(watchJS, 0);

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, compilerStatus);

