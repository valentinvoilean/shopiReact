import React, {PropTypes} from 'react';
import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    activateItem: PropTypes.func.isRequired,
    deactivateItem: PropTypes.func.isRequired,
    activateItemByKeyboard: PropTypes.func.isRequired,
    ref: PropTypes.func.isRequired,

    children: PropTypes.element.isRequired,

    isElActive: PropTypes.bool.isRequired
};

export default function MyAccountWrapper(props) {
    const {
        activateItem,
        deactivateItem,
        activateItemByKeyboard,
        ref,
        children,
        isElActive
    } = props;

    const elClasses = classnames('myAccount', {
        [`${SHARED_CLASSES.active}`]: isElActive
    });

    return (
        <div className={elClasses}
             ref={ref}
             onMouseOver={activateItem}
             onMouseOut={deactivateItem}
             onFocus={activateItem}
             onBlur={deactivateItem}
             onTouchEnd={activateItem}
             onKeyDown={activateItemByKeyboard}
        >
            {children}
        </div>
    );
}

MyAccountWrapper.propTypes = propTypes;
