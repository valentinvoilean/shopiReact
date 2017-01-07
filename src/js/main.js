import 'jquery';
import 'modernizr';

import SVGSprite from 'jQuery/SVGSprite/SVGSprite';

// Import React App
import 'App/index';

let svgSprite;

$(window).on('load', () => {
    svgSprite = new SVGSprite();
});

$(window).on('destroy', () => {
    svgSprite.destroy();
});
