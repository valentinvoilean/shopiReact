import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'shared/constants/classes';

const propTypes = {
    isHiddenSideCollapsed: PropTypes.bool.isRequired,
    isHiddenSideOutsideViewport: PropTypes.bool.isRequired,
    isHiddenSideAnimated: PropTypes.bool.isRequired,
    hiddenSideWidth: PropTypes.number.isRequired,

    updateHiddenSideRef: PropTypes.func.isRequired,

    children: PropTypes.array.isRequired,
};

export default function MyAccountHiddenSide(props) {
    const {
        isHiddenSideCollapsed,
        isHiddenSideOutsideViewport,
        isHiddenSideAnimated,
        hiddenSideWidth,
        updateHiddenSideRef,
        children,
    } = props;

    const hiddenSideClasses = classNames('myAccount__hiddenSide', {
        [`${SHARED_CLASSES.outsideViewport}`]: isHiddenSideOutsideViewport,
        [`${SHARED_CLASSES.collapsed}`]: isHiddenSideCollapsed,
        [`${SHARED_CLASSES.animate}`]: isHiddenSideAnimated,
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
