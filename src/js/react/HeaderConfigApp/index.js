import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import {Modal} from 'HeaderConfigApp/components';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <Modal />
    </Provider>, document.getElementById('configContainer'));
