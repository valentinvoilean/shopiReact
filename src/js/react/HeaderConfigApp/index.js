import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import {Modal} from 'HeaderConfigApp/containers';

const headerConfigStore = configureStore();

ReactDOM.render(<Modal store={ headerConfigStore }/>, document.getElementById('configContainer'));
