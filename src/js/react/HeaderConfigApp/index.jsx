import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import ModalContainer from 'HeaderConfigApp/containers/modal';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={ headerConfigStore }>
        <ModalContainer/>
    </Provider>, document.getElementById('configContainer'));
