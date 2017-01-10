import React, {Component} from 'react';
import classnames from 'classnames';
import md5 from 'md5';

import {SHARED_CLASSES} from 'common/constants/classes';

import MyAccountVisibleSide from './MyAccountVisibleSide';
import MyAccountHiddenSide from './MyAccountHiddenSide';
import MyAccountWrapper from './MyAccountWrapper';

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
        const welcomeMessageClasses = classnames('myAccount__link', 'is-active', {
            [`${SHARED_CLASSES.collapsed}`]: this.state.isWelcomeMessageCollapsed,
            [`${SHARED_CLASSES.animate}`]: this.state.isWelcomeMessageAnimated
        });

        const wrapperProps = {
            activateItem: this.activateItem,
            deactivateItem: this.deactivateItem,
            activateItemByKeyboard: this.activateItemByKeyboard,
            ref: this.updateEl
        };

        const hiddenSideProps = {
            ...this.state,
            updateHiddenSideRef: this.updateHiddenSideRef
        };

        if (this.state.loggedIn) {
            return (
                <MyAccountWrapper {...wrapperProps} {...this.state}>
                    <MyAccountHiddenSide {...hiddenSideProps}>
                        <a className="myAccount__link" href="/account/logout">Log out</a>
                        <span className="myAccount__separator">-</span>
                        <a className="myAccount__link is-active" href="/account">My Account</a>
                    </MyAccountHiddenSide>
                    <MyAccountVisibleSide>
                        <a href="/account" className="myAccount__img">
                            <div className="myAccount__gravatar">
                                <img alt="avatar"
                                     src={`//gravatar.com/avatar/${md5(this.state.customer.email)}?s=40&d=blank`}
                                />
                            </div>
                            <svg className="myAccount__icon">
                                <use xlinkHref="#user-2" />
                            </svg>
                        </a>

                        <a className={welcomeMessageClasses}
                           ref={this.updateWelcomeMessageRef}
                           style={{width: this.state.welcomeMessageWidth}}
                           href="/account"
                        > Hi, {this.state.customer.first_name} !</a>
                    </MyAccountVisibleSide>
                </MyAccountWrapper>
            );
        }

        return (
            <MyAccountWrapper {...wrapperProps} {...this.state}>
                <MyAccountHiddenSide {...hiddenSideProps}>
                    <a className="myAccount__link" href="/account/login">Log in</a>
                    {this.state.shop.customer_accounts_optional ?
                        (
                            <span>
                                <span className="myAccount__separator"> - </span>
                                <a className="myAccount__link is-active" href="/account/register">Register</a>
                            </span>

                        ) : ''
                    }
                </MyAccountHiddenSide>
                <MyAccountVisibleSide>
                    <a href="/account/register" className="myAccount__img">
                        <svg className="myAccount__icon">
                            <use xlinkHref="#user-1" />
                        </svg>
                    </a>
                </MyAccountVisibleSide>
            </MyAccountWrapper>
        );
    }
}
