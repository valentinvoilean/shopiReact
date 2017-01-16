import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MatchMedia} from 'react-match-media';

import {mediaQueries} from 'common/constants/mediaQueries';
import configureStore from 'App/store/configureStore';

import {Header} from './features/Header';
import Footer from './features/Footer';
import {MenuSidebar} from './features/MenuSidebar';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MatchMedia mediaQuery={mediaQueries.mobile}>
            <MenuSidebar />
        </MatchMedia>
    </Provider>
    , document.getElementsByTagName('aside')[0]);

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
