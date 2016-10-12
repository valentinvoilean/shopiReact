import React from 'react';

import HeaderTop from './header-top.jsx';
import HeaderMain from './header-main.jsx';
import HeaderBottom from './header-bottom.jsx';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <HeaderTop></HeaderTop>
                <HeaderMain></HeaderMain>
                <HeaderBottom></HeaderBottom>
            </div>
        );
    }
}
