const command = require('@shopify/themekit').command;

module.exports = function () {
    command({
        args: ['watch']
    }, function(err) {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Theme Kit command has completed.');
    });
};
