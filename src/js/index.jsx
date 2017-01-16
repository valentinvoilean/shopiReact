import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {SVGSprite} from 'components';
// Generate SVG Sprite

let svgSprite;

$(window).on('load', () => {
    ReactDOM.render(<App />, document.getElementById('app'));
    svgSprite = new SVGSprite();
});

$(window).on('destroy', () => {
    svgSprite.destroy();
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
});
