require('colors');
const sass = require('node-sass');
const fs = require('fs');
const watch = require('node-watch');

const styles = './src/styles';
const assets = './theme/assets';

function compileSass() {
    sass.render({
        file: `${styles}/theme.scss`,
        outputStyle: 'compressed',
        outFile: `${assets}/theme.css`,
        sourceMap: true
    }, function (error, result) { // node-style callback from v3.0.0 onwards
        if (error) {
            console.log(error.status); // used to be "code" in v2x and below
            console.log(error.column);
            console.log(error.message);
            console.log(error.line);
        }
        else {
            fs.writeFile(`${assets}/theme.css`, result.css, function(err) {
                if (!err){
                    console.log('Finished SASS task !');

                    fs.writeFile(`${assets}/theme.css.map`, result.map, function(err) {
                        if (err){
                            console.log('Error writing the sass source maps!');
                        }
                    });
                }
            });
        }
    });
}

console.log('Watching SCSS files..'.green);

const filter = function(pattern, fn) {
    return function(filename) {
        if (pattern.test(filename)) {
            fn(filename);
        }
    };
};

watch(styles, filter(/\.scss$/, function(filename) {
    console.log(`File ${filename} has been changed`.blue);
    compileSass();
}));

compileSass();

