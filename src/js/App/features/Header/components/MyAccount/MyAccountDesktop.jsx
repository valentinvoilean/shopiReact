import React, {Component} from 'react';
import md5 from 'md5';
import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

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
            isHiddenSideOutsideViewport: true
        };
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

    render() {
        const hiddenSideClasses = classnames('myAccount__hiddenSide', {
            [`${SHARED_CLASSES.outsideViewport}`]: this.state.isHiddenSideOutsideViewport,
            [`${SHARED_CLASSES.collapsed}`]: this.state.isHiddenSideCollapsed
        });

        const loggedInHtml = (
            <div className="myAccount">
                <div className={hiddenSideClasses}
                     ref={(c) => this.hiddenSide = c}
                     style={{ width: this.state.hiddenSideWidth }}
                >
                    <a className="myAccount__link" href="/account/logout">Log out</a>
                    <span className="myAccount__separator">-</span>
                    <a className="myAccount__link is-active" href="/account">My Account</a>
                </div>

                <div className="myAccount__visibleSide">
                    <a href="/account" className="myAccount__img">
                        <div className="myAccount__gravatar">
                            <img alt="avatar" src={`//gravatar.com/avatar/${md5(this.state.customer.email)}?s=40&d=blank`} />
                        </div>
                        <svg className="myAccount__icon">
                            <use xlinkHref="#user-2" />
                        </svg>
                    </a>

                    <a className="myAccount__link is-active"
                       ref={(c) => this.welcomeMessage = c}
                       style={{ width: this.state.welcomeMessageWidth }}
                       href="/account"
                    > Hi, {this.state.customer.first_name} !</a>
                </div>
            </div>
        );

        const loggedOutHtml = (
            <div className="myAccount">
                <div className={hiddenSideClasses}
                     ref={(c) => this.hiddenSide = c}
                     style={{ width: this.state.hiddenSideWidth }}
                >
                    <a className="myAccount__link" href="/account/login">Log in</a>
                    {this.state.shop.customer_accounts_optional ?
                        (
                        <span>
                            <span className="myAccount__separator"> - </span>
                            <a className="myAccount__link is-active" href="/account/register">Register</a>
                        </span>

                        ) : ''
                    }
                </div>
                <div className="myAccount__visibleSide">
                    <a href="/account/register" className="myAccount__img">
                        <svg className="myAccount__icon">
                            <use xlinkHref="#user-1" />
                        </svg>
                    </a>
                </div>
            </div>
        );

        return this.state.loggedIn ? loggedInHtml : loggedOutHtml;
    }
}
