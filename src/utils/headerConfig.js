import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import HeaderConfigBox from 'components/header-config-box';

let headerConfigStore = configureStore({
    MyAccount: {
        mobile: {position: 'TopLeft', order: 1},
        tablet: {position: 'MainCenter', order: 0},
        desktop: {position: 'BottomRight', order: 0}
    },
    Wishlist: {
        mobile: {position: 'TopLeft', order: 0},
        tablet: {position: 'TopLeft', order: 0},
        desktop: {position: 'TopRight', order: 1}
    }
});

ReactDOM.render(
    <Provider store={headerConfigStore}>
        <HeaderConfigBox/>
    </Provider>, document.getElementById('configContainer'));
