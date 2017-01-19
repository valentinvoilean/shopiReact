const path = require('path');
const fs = require('fs');
require('colors');

const newDir = './theme/assets';

module.exports = function (file) {
    let filename = path.basename(file);
    fs.createReadStream(file).pipe(fs.createWriteStream(`${newDir}/${filename}.liquid`));

    console.log(`The file ${file}.liquid has been moved to Assets folder.`.yellow);
};
