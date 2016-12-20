import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'react/store/configureStore';
import {Modal} from 'HeaderConfig/components';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Modal />
    </Provider>, document.getElementById('configContainer'));
