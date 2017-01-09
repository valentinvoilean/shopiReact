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

            loggedIn: true,

            isHiddenSideCollapsed: false,
            isHiddenSideOutsideViewport: true,
            isHiddenSideAnimated: false,
            hiddenSideWidth: null,

            isWelcomeMessageAnimated: false,
            isWelcomeMessageCollapsed: false,
            welcomeMessageWidth: null,

            isElActive: false
        };

        this.updateHiddenSideRef = this.updateHiddenSideRef.bind(this);
        this.updateWelcomeMessageRef = this.updateWelcomeMessageRef.bind(this);
        this.updateEl = this.updateEl.bind(this);
        this.activateItem = this.activateItem.bind(this);
        this.deactivateItem = this.deactivateItem.bind(this);
        this.activateItemByKeyboard = this.activateItemByKeyboard.bind(this);
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

    activateLink() {
        /*$(this).addClass(SHARED_CLASSES.active);
        $(this).siblings().removeClass(SHARED_CLASSES.active);*/
    }

    activateItemByKeyboard(e) {
        if (e.key === 'Enter') {
            this.slideInLink();
        }
    }

    activateItem(e) {
        if (window.Modernizr.touchevents) {
            this.preventClickFirstTime(e);
        } else {
            this.slideInLeftSide();
        }
    }

    deactivateItem(e) {
        if (window.Modernizr.touchevents) {
            if (e.target !== this.el // if the target of the click isn't the container...
                && !this.el.contains(e.target)) // ... nor a descendant of the container
            {
                this.slideOutLeftSide();
            }
        } else {
            this.slideOutLeftSide();
        }
    }

    preventClickFirstTime(e) {
        if (this.state.isElActive) {
            return true;
        }
        else {
            e.preventDefault();
            this.slideInLeftSide();
        }
    }

    slideInLeftSide() {
        this.setState({
            isElActive: true,
            isHiddenSideAnimated: true,
            isHiddenSideCollapsed: false,
            isWelcomeMessageAnimated: true,
            isWelcomeMessageCollapsed: true
        });
    }

    slideOutLeftSide() {
        this.setState({
            isElActive: false,
            isHiddenSideCollapsed: true,
            isWelcomeMessageCollapsed: false
        });
    }

    updateHiddenSideRef(c) {
        this.hiddenSide = c;
    }

    updateWelcomeMessageRef(c) {
        this.welcomeMessage = c;
    }

    updateEl(c) {
        this.el = c;
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <MyAccountDesktopLoggedIn {...this.state}
                                          updateHiddenSideRef={this.updateHiddenSideRef}
                                          updateWelcomeMessageRef={this.updateWelcomeMessageRef}
                                          updateEl={this.updateEl}

                                          activateItem={this.activateItem}
                                          deactivateItem={this.deactivateItem}
                                          activateItemByKeyboard={this.activateItemByKeyboard}
                />
            );
        }

        return (
            <MyAccountDesktopLoggedOut {...this.state}
                                       updateHiddenSideRef={this.updateHiddenSideRef}
                                       updateEl={this.updateEl}

                                       activateItem={this.activateItem}
                                       deactivateItem={this.deactivateItem}
                                       activateItemByKeyboard={this.activateItemByKeyboard}
            />
        );
    }
}
