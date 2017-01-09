import React, {PropTypes} from 'react';

import md5 from 'md5';
import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    customer: PropTypes.object.isRequired,
    isHiddenSideCollapsed: PropTypes.bool.isRequired,
    isHiddenSideOutsideViewport: PropTypes.bool.isRequired,
    hiddenSideWidth: PropTypes.number,
    welcomeMessageWidth: PropTypes.number,
    updateHiddenSideRef: PropTypes.func.isRequired,
    updateWelcomeMessageRef: PropTypes.func.isRequired
};

export default function MyAccountDesktopLoggedIn(props) {

    const {
        customer,
        isHiddenSideCollapsed,
        isHiddenSideOutsideViewport,
        hiddenSideWidth,
        welcomeMessageWidth,
        updateHiddenSideRef,
        updateWelcomeMessageRef
    } = props;

    const hiddenSideClasses = classnames('myAccount__hiddenSide', {
        [`${SHARED_CLASSES.outsideViewport}`]: isHiddenSideOutsideViewport,
        [`${SHARED_CLASSES.collapsed}`]: isHiddenSideCollapsed
    });

    return (
        <div className="myAccount">
            <div className={hiddenSideClasses}
                 ref={updateHiddenSideRef}
                 style={{ width: hiddenSideWidth }}
            >
                <a className="myAccount__link" href="/account/logout">Log out</a>
                <span className="myAccount__separator">-</span>
                <a className="myAccount__link is-active" href="/account">My Account</a>
            </div>

            <div className="myAccount__visibleSide">
                <a href="/account" className="myAccount__img">
                    <div className="myAccount__gravatar">
                        <img alt="avatar" src={`//gravatar.com/avatar/${md5(customer.email)}?s=40&d=blank`} />
                    </div>
                    <svg className="myAccount__icon">
                        <use xlinkHref="#user-2" />
                    </svg>
                </a>

                <a className="myAccount__link is-active"
                   ref={updateWelcomeMessageRef}
                   style={{ width: welcomeMessageWidth }}
                   href="/account"
                > Hi, {customer.first_name} !</a>
            </div>
        </div>
    );
}

MyAccountDesktopLoggedIn.propTypes = propTypes;
