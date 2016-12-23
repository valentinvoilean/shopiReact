import React from 'react';
import ReactDOM from 'react-dom';

import Header from './features/Header';
import Footer from './features/Footer';
import {MyAccount} from './features/Header/components/MyAccount/MyAccount';
import {Wishlist} from './features/Header/components/Wishlist/Wishlist';

ReactDOM.render(
    <Header>
        <MyAccount />
        <Wishlist />
    </Header>
    , document.getElementsByTagName('header')[0]);

ReactDOM.render(<Footer />, document.getElementsByTagName('footer')[0]);
