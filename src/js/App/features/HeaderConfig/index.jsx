import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'App/store/configureStore';
import {Modal} from 'HeaderConfig/containers';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Modal />
    </Provider>, document.getElementById('configContainer'));
