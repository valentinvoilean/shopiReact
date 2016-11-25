import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import {ModalView} from 'HeaderConfigApp/components';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <ModalView />
    </Provider>, document.getElementById('configContainer'));
