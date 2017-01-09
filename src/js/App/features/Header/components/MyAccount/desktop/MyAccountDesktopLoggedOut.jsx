import React, {PropTypes} from 'react';

import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    shop: PropTypes.object.isRequired,
    isHiddenSideCollapsed: PropTypes.bool.isRequired,
    isHiddenSideOutsideViewport: PropTypes.bool.isRequired,
    hiddenSideWidth: PropTypes.number,
    updateHiddenSideRef: PropTypes.func.isRequired
};

export default function MyAccountDesktopLoggedOut(props) {
    const {
        shop,
        isHiddenSideCollapsed,
        isHiddenSideOutsideViewport,
        hiddenSideWidth,
        updateHiddenSideRef
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
                <a className="myAccount__link" href="/account/login">Log in</a>
                {shop.customer_accounts_optional ?
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
}

MyAccountDesktopLoggedOut.propTypes = propTypes;
