require('colors');

module.exports = function(err, stats) {
    if (err) {
        return console.log('FATAL ERROR: '.red, err);
    }

    const jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
        return console.log('ERROR: '.red, err);
    }

    if (jsonStats.warnings.length > 0) {
        console.log('WARNING: '.green, err);
    }

    console.log(stats.toString({
        colors: true,
        version: false,
        hash: false,
        chunks: false,
        children: false
    }));
};
