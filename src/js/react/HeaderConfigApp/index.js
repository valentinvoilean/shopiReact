import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Modal from 'HeaderConfigApp/components/modal.jsx';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={ headerConfigStore }>
        <Modal/>
    </Provider>, document.getElementById('configContainer'));
