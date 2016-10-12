import React from 'react';

import {HeaderTop, HeaderBottom, HeaderMain} from './';
import {MyAccount} from '../my-account';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameWithQualifier: 'Mr. '
        };

        this.data = {
            MyAccount: {
                mobile: {position: 'top_left', order: 1},
                tablet: {position: 'top_left', order: 1},
                desktop: {position: 'top_center', order: 1}
            },
            WishList: {
                mobile: {position: 'top_left', order: 2},
                tablet: {position: 'top_left', order: 2},
                desktop: {position: 'top_left', order: 2}
            }
        };
    }

    componentDidMount() {
        console.warn('mounted');
    }

    render() {
        return (
            <div className="header">
                <HeaderTop data={this.data}>
                    <MyAccount key="1">Hi,</MyAccount>
                </HeaderTop>
                <HeaderMain>{this.state.nameWithQualifier}</HeaderMain>
                <HeaderBottom></HeaderBottom>
            </div>
        );
    }
}
