import React, {PropTypes} from 'react';

import md5 from 'md5';
import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    customer: PropTypes.object.isRequired,
    isHiddenSideCollapsed: PropTypes.bool.isRequired,
    isHiddenSideOutsideViewport: PropTypes.bool.isRequired,
    isHiddenSideAnimated: PropTypes.bool.isRequired,
    hiddenSideWidth: PropTypes.number,

    updateHiddenSideRef: PropTypes.func.isRequired,
    updateWelcomeMessageRef: PropTypes.func.isRequired,
    updateEl: PropTypes.func.isRequired,

    isElActive: PropTypes.bool.isRequired,

    isWelcomeMessageAnimated: PropTypes.bool.isRequired,
    isWelcomeMessageCollapsed: PropTypes.bool.isRequired,
    welcomeMessageWidth: PropTypes.number,

    activateItem: PropTypes.func.isRequired,
    activateItemByKeyboard: PropTypes.func.isRequired,
    deactivateItem: PropTypes.func.isRequired
};

export default function MyAccountDesktopLoggedIn(props) {

    const {
        customer,
        isHiddenSideCollapsed,
        isHiddenSideOutsideViewport,
        isHiddenSideAnimated,
        hiddenSideWidth,
        welcomeMessageWidth,
        updateHiddenSideRef,
        updateWelcomeMessageRef,
        updateEl,
        isElActive,
        isWelcomeMessageCollapsed,
        isWelcomeMessageAnimated,
        activateItem,
        deactivateItem,
        activateItemByKeyboard
    } = props;

    const hiddenSideClasses = classnames('myAccount__hiddenSide', {
        [`${SHARED_CLASSES.outsideViewport}`]: isHiddenSideOutsideViewport,
        [`${SHARED_CLASSES.collapsed}`]: isHiddenSideCollapsed,
        [`${SHARED_CLASSES.animate}`]: isHiddenSideAnimated
    });

    const elClasses = classnames('myAccount', {
        [`${SHARED_CLASSES.active}`]: isElActive
    });

    const welcomeMessageClasses = classnames('myAccount__link', 'is-active', {
        [`${SHARED_CLASSES.collapsed}`]: isWelcomeMessageCollapsed,
        [`${SHARED_CLASSES.animate}`]: isWelcomeMessageAnimated
    });

    return (
        <div className={elClasses}
             ref={updateEl}
             onMouseOver={activateItem}
             onMouseOut={deactivateItem}
             onFocus={activateItem}
             onBlur={deactivateItem}
             onTouchEnd={activateItem}
             onKeyDown={activateItemByKeyboard}
        >
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

                <a className={welcomeMessageClasses}
                   ref={updateWelcomeMessageRef}
                   style={{ width: welcomeMessageWidth }}
                   href="/account"
                > Hi, {customer.first_name} !</a>
            </div>
        </div>
    );
}

MyAccountDesktopLoggedIn.propTypes = propTypes;
