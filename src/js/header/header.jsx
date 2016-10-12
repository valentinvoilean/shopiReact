import React from 'react';

import HeaderTop from './header-top.jsx';
import HeaderMain from './header-main.jsx';
import HeaderBottom from './header-bottom.jsx';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameWithQualifier: 'Mr. '
        };

        this.data = {
            myAccount: {
                mobile: {position: 'top-left', order: 1},
                tablet: {position: 'top-left', order: 1},
                desktop: {position: 'top-left', order: 1}
            },
            wishList: {
                mobile: {position: 'top-left', order: 2},
                tablet: {position: 'top-left', order: 2},
                desktop: {position: 'top-left', order: 2}
            }
        };

        this.data2 = {
            mobile: {
                myAccount: {position: 'top-left', order: 1},
                wishlist: {position: 'top-left', order: 2}
            },
            tablet: {
                myAccount: {position: 'top-left', order: 1},
                wishlist: {position: 'top-left', order: 2}
            },
            desktop: {
                myAccount: {position: 'top-left', order: 1},
                wishlist: {position: 'top-left', order: 2}
            }
        };
    }

    componentDidMount() {
        console.warn('mounted');
    }

    render() {
        return (
            <div className="header">
                <HeaderTop data={this.data}></HeaderTop>
                <HeaderMain>{this.state.nameWithQualifier}</HeaderMain>
                <HeaderBottom>
                    <HeaderTop priority="2">This is the text that must be shown</HeaderTop>
                    <div priority="1" className="test">sdsdads</div>
                </HeaderBottom>
            </div>
        );
    }
}
