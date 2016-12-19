import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'AppRedux/configureStore';
import {HeaderConfigModal} from 'HeaderConfig';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <HeaderConfigModal />
    </Provider>, document.getElementById('configContainer'));
