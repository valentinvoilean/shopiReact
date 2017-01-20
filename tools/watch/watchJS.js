const watch = require('node-watch');
const path = require('path');
const fs = require('fs');
require('colors');

const newDir = './theme/assets';
const oldDir = './dist/assets';

function moveFileToAssetsFolder(file) {
    let filename = path.basename(file);
    fs.createReadStream(file).pipe(fs.createWriteStream(`${newDir}/${filename}.liquid`));

    console.log(`The file ${file}.liquid has been moved to Assets folder.`.yellow);
}

function filter(pattern, fn) {
    return function(filename) {
        if (pattern.test(filename)) {
            fn(filename);
        }
    };
}

module.exports = function watchJS() {
    console.log('Webpack: Watching JS chunks..'.green);
    watch(oldDir, {recursive: true}, filter(/\.js$/, function(filename) {
        console.log(`The file ${filename} has been changed`.blue);
        moveFileToAssetsFolder(filename);
    }));
};
