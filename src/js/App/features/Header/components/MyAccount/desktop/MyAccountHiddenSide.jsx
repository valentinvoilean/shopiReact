import React, {PropTypes} from 'react';
import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    isHiddenSideCollapsed: PropTypes.bool.isRequired,
    isHiddenSideOutsideViewport: PropTypes.bool.isRequired,
    isHiddenSideAnimated: PropTypes.bool.isRequired,
    hiddenSideWidth: PropTypes.number,

    updateHiddenSideRef: PropTypes.func.isRequired,

    children: PropTypes.element.isRequired
};

export default function MyAccountHiddenSide(props) {
    const {
        isHiddenSideCollapsed,
        isHiddenSideOutsideViewport,
        isHiddenSideAnimated,
        hiddenSideWidth,
        updateHiddenSideRef,
        children
    } = props;

    const hiddenSideClasses = classnames('myAccount__hiddenSide', {
        [`${SHARED_CLASSES.outsideViewport}`]: isHiddenSideOutsideViewport,
        [`${SHARED_CLASSES.collapsed}`]: isHiddenSideCollapsed,
        [`${SHARED_CLASSES.animate}`]: isHiddenSideAnimated
    });

    return (
        <div className={hiddenSideClasses}
             ref={updateHiddenSideRef}
             style={{ width: hiddenSideWidth }}
        >
            {children}
        </div>
    );
}

MyAccountHiddenSide.propTypes = propTypes;
