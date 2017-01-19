const watch = require('node-watch');

const oldDir = './dist/assets';
const moveFileToAssetsFolder = require('./moveFileToAssetsFolder');

const filter = function(pattern, fn) {
    return function(filename) {
        if (pattern.test(filename)) {
            fn(filename);
        }
    };
};

module.exports = function watchJS() {
    console.log('Webpack: Watching JS chunks..'.green);
    watch(oldDir, {recursive: true}, filter(/\.js$/, function(filename) {
        console.log(`The file ${filename} has been changed`.blue);
        moveFileToAssetsFolder(filename);
    }));
};
