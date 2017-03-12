import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

window.onload = function() {
    ReactDOM.render(<App />, document.querySelector('#app'));
};

window.addEventListener('destroy', () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
});
