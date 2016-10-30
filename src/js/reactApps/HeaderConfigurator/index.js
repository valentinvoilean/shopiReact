import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import {App} from 'react-header-configurator/containers';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <App/>
    </Provider>, document.getElementById('configContainer'));
