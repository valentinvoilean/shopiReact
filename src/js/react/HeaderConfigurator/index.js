import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import App from 'react-header-configurator/containers/App/App.jsx';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <App/>
    </Provider>, document.getElementById('configContainer'));
