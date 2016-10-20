import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import HeaderConfigBox from 'components/header-config-box';

const headerConfigStore = configureStore();

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <HeaderConfigBox/>
    </Provider>, document.getElementById('configContainer'));
