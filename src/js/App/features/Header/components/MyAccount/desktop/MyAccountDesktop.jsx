import React, {Component} from 'react';

import MyAccountDesktopLoggedIn from './MyAccountDesktopLoggedIn';
import MyAccountDesktopLoggedOut from './MyAccountDesktopLoggedOut';

export default class MyAccountDesktop extends Component {

    constructor() {
        super();

        this.state = {
            customer: {
                first_name : 'Vali', // eslint-disable-line
                email: 'vali.voilean@gmail.com'
            },
            shop: {
                customer_accounts_optional: true // eslint-disable-line
            },

            loggedIn: false,

            isHiddenSideCollapsed: false,
            isHiddenSideOutsideViewport: true,
            hiddenSideWidth: null,
            welcomeMessageWidth: null
        };

        this.updateHiddenSideRef = this.updateHiddenSideRef.bind(this);
    }

    componentDidMount() {
        this.calculateWidths();
    }

    shouldComponentUpdate() {
        return true;
    }

    calculateWidths() {
        this.setState({
            hiddenSideWidth: this.hiddenSide.offsetWidth,
            welcomeMessageWidth: this.state.loggedIn ? this.welcomeMessage.offsetWidth : null,
            isHiddenSideCollapsed: true,
            isHiddenSideOutsideViewport: false
        });
    }

    updateHiddenSideRef(c) {
        this.hiddenSide = c;
    }

    updateWelcomeMessageRef(c) {
        this.welcomeMessage = c;
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <MyAccountDesktopLoggedIn {...this.state}
                                          updateHiddenSideRef={this.updateHiddenSideRef}
                                          updateWelcomeMessageRef={this.updateWelcomeMessageRef}
                />
            );
        }

        return (
            <MyAccountDesktopLoggedOut {...this.state} updateHiddenSideRef={this.updateHiddenSideRef} />
        );
    }
}
