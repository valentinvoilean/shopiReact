import React, {Component} from 'react';
import classNames from 'classnames';
import md5 from 'md5';

import {SHARED_CLASSES} from 'constants/classes';

import VisibleSide from './components/VisibleSide';
import HiddenSide from './components/HiddenSide';
import Wrapper from './components/Wrapper';
import Link from './components/Link';

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
        const welcomeMessageClasses = classNames('myAccount__link', 'is-active', {
            [`${SHARED_CLASSES.collapsed}`]: this.state.isWelcomeMessageCollapsed,
            [`${SHARED_CLASSES.animate}`]: this.state.isWelcomeMessageAnimated
        });

        const wrapperProps = {
            activateItem: this.activateItem,
            deactivateItem: this.deactivateItem,
            activateItemByKeyboard: this.activateItemByKeyboard,
            updateEl: this.updateEl
        };

        const hiddenSideProps = {
            ...this.state,
            updateHiddenSideRef: this.updateHiddenSideRef
        };

        if (this.state.loggedIn) {
            return (
                <Wrapper {...wrapperProps} {...this.state}>
                    <HiddenSide {...hiddenSideProps}>
                        <Link name="LogOut" link="/account/logout" loggedIn>
                            <span>Log Out</span>
                        </Link>
                        <span className="myAccount__separator">-</span>
                        <Link name="MyAccount" link="/account" loggedIn>
                            <span>My Account</span>
                        </Link>
                    </HiddenSide>
                    <VisibleSide>
                        <a className={welcomeMessageClasses}
                           ref={this.updateWelcomeMessageRef}
                           style={{width: this.state.welcomeMessageWidth}}
                           href="/account"
                        > Hi, {this.state.customer.first_name} !</a>
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
                    </VisibleSide>
                </Wrapper>
            );
        }

        return (
            <Wrapper {...wrapperProps} {...this.state}>
                <HiddenSide {...hiddenSideProps}>
                    <Link name="LogIn" link="/account/login">
                        <span>Log In</span>
                    </Link>
                    {this.state.shop.customer_accounts_optional ?
                        <span>
                            <span className="myAccount__separator"> - </span>
                            <Link link={'/account/register'} name="Register">
                                <span>Register</span>
                            </Link>
                        </span>
                        : ''
                    }
                </HiddenSide>
                <VisibleSide>
                    <a href="/account/register" className="myAccount__img">
                        <svg className="myAccount__icon">
                            <use xlinkHref="#user-1" />
                        </svg>
                    </a>
                </VisibleSide>
            </Wrapper>
        );
    }
}
