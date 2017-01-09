import React, {Component} from 'react';
import md5 from 'md5';

export default class MyAccountDesktop extends Component {

    constructor() {
        super();

        this.state = {
            customer: {
                first_name : 'Vali', // eslint-disable-line
                email: 'vali.voilean@gmail.com'
            },

            loggedIn: false
        };
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const loggedInHtml = (
            <div className="myAccount__visibleSide">
                <a href="/account" className="myAccount__img">
                    <div className="myAccount__gravatar">
                        <img alt="avatar" src={`//gravatar.com/avatar/${md5(this.state.customer.email)}?s=40&d=blank`} />
                    </div>
                    <svg className="myAccount__icon">
                        <use xlinkHref="#user-2"></use>
                    </svg>
                </a>

                <a className="myAccount__link is-active" href="/account">Hi, {this.state.customer.first_name} !</a>
            </div>
        );

        const loggedOutHtml = (
            <div className="myAccount__visibleSide">
                <a href="/account/register" className="myAccount__img">
                    <svg className="myAccount__icon">
                        <use xlinkHref="#user-1"></use>
                    </svg>
                </a>
            </div>
        );

        return (
            <div className="myAccount">
                <div className="myAccount__hiddenSide is-outside-viewport">
                </div>
                {this.state.loggedIn ? loggedInHtml : loggedOutHtml}
            </div>
        );
    }
}
