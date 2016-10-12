import React from 'react';

export class MyAccount extends React.Component {
    static get defaultProps() {
        return {
            displayName: 'MyAccount'
        };
    }

    returnIconBasedOnCustomer() {
        const userLoggedIn = false;

        if (userLoggedIn) {
            return (
                <div className="myAccount__visibleSide">
                    <a href="/account" className="myAccount__img">
                        <div className="myAccount__gravatar">
                            <img src="//gravatar.com/avatar/{{ customer.email | md5 }}?s=40&d=blank"/>
                        </div>
                        <svg className="myAccount__icon">
                            <use xlinkHref="#user-2"></use>
                        </svg>
                    </a>

                    <a className="myAccount__link is-active" href="/account">Hi, customer.first_name!</a>
                </div>
            );
        }
        else {
            return (
                <div className="myAccount__visibleSide">My Account
                    <a href="/account/register" className="myAccount__img">
                        <svg className="myAccount__icon">
                            <use xlinkHref="#user-1"></use>
                        </svg>
                    </a>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="myAccount">
                <div className="myAccount__hiddenSide hidden-xs is-outside-viewport">
                </div>
                {this.returnIconBasedOnCustomer()}
            </div>
        );
    }
}
