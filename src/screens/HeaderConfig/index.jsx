import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'config/store/configureStore';
import HeaderConfig from './HeaderConfig';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HeaderConfig />
    </Provider>, document.getElementById('configContainer'));
