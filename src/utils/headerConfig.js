import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { headerConfigApp } from 'reducers';
import HeaderConfigBoxContainer from 'containers/header-config-box';

let headerConfigStore = createStore(headerConfigApp, composeWithDevTools());

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <HeaderConfigBoxContainer/>
    </Provider>, document.getElementById('configContainer'));
