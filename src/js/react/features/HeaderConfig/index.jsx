import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'react/store/configureStore';
import {HeaderConfigModal} from 'HeaderConfig/components';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HeaderConfigModal />
    </Provider>, document.getElementById('configContainer'));
