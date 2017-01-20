module.exports = function(pattern, fn) {
    return function(filename) {
        if (pattern.test(filename)) {
            fn(filename);
        }
    };
};
