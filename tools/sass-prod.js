require('colors');
const concat = require('serial-concat-files');
const watch = require('node-watch');

const styles = './src/styles';
const assets = './theme/assets';

let concatFiles = () => {
    console.log('Starting SASS concatenation...'.green);
    console.time('SASS CONCATENATION');

    concat([
        /**
         * Breakpoints
         */
        `${styles}/variables/_grid.scss`,

        /**
         * General Variables
         */
        `${styles}/variables/_fonts.scss`,
        `${styles}/variables/_colors.scss`,

        /**
         * Sass Mixins
         */
        `${styles}/mixins/_clearfix.scss`,
        `${styles}/mixins/_flex.scss`,
        `${styles}/mixins/_center-block.scss`,
        `${styles}/mixins/_grid-framework.scss`,
        `${styles}/mixins/_grid.scss`,
        `${styles}/mixins/_breakpoint.scss`,

        /**
         * Normalize
         */
        `${styles}/components/core/_normalize.scss`,

        /**
         * Grid Setup
         */
        `${styles}/components/core/_grid.scss`,
        `${styles}/components/core/_utilities.scss`,
        `${styles}/components/core/_responsive-utilities.scss`,

        /**
         * Base
         */
        `${styles}/components/core/_base.scss`,
        `${styles}/components/modal/_modal.scss`,

        /**
         * Header
         */
        `${styles}/components/hamburgerIcon/_hamburgerIcon.scss`,
        `${styles}/components/header/_header.scss`,
        `${styles}/components/header/_headerTop.scss`,
        `${styles}/components/header/_headerMain.scss`,
        `${styles}/components/header/_headerBottom.scss`,
        `${styles}/components/header/_header-my-account.scss`,
        `${styles}/components/header/_header-wish-list.scss`,
        `${styles}/components/header/_header-cart.scss`,
        `${styles}/components/header/_header-search.scss`,
        `${styles}/components/header/_header-menu.scss`,
        `${styles}/components/header/_header-logo.scss`
    ], `${assets}/theme.scss.liquid`, function () {
        console.log('Finished SASS concatenation '.green);
        console.timeEnd('SASS CONCATENATION');
    });
};

if (process.argv[2]) {
    console.log('Watching SCSS files..'.green);
    watch(styles, {recursive: true}, function (path) {

        console.log(`File ${path} has been changed`.blue);
        concatFiles();
    });
}

concatFiles();
