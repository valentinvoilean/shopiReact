import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import ModalContainer from 'HeaderConfigApp/containers/modal';

const headerConfigStore = configureStore();

ReactDOM.render(<ModalContainer store={ headerConfigStore }/>, document.getElementById('configContainer'));
