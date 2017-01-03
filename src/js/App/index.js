import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'App/store/configureStore';

import {Header} from './features/Header';
import Footer from './features/Footer';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Header />
    </Provider>
    , document.getElementsByTagName('header')[0]);

ReactDOM.render(
    <Provider store={store}>
        <Footer />
    </Provider>
    , document.getElementsByTagName('footer')[0]);
