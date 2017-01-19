require('colors');

module.exports = function(err, stats) {
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
};
