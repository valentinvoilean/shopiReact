import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';

import HeaderConfigContainer from 'containers/headerConfig';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <HeaderConfigContainer/>
    </Provider>, document.getElementById('configContainer'));
