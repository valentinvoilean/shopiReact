const watch = require('node-watch');

const oldDir = './dist/assets';
const moveFileToAssetsFolder = require('./moveFileToAssetsFolder');
const filter = require('./filter');

module.exports = function watchJS() {
    console.log('Webpack: Watching JS chunks..'.green);
    watch(oldDir, {recursive: true}, filter(/\.js$/, function(filename) {
        console.log(`The file ${filename} has been changed`.blue);
        moveFileToAssetsFolder(filename);
    }));
};
