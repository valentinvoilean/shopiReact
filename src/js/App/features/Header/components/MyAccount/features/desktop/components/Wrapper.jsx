import React, {PropTypes} from 'react';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    activateItem: PropTypes.func.isRequired,
    deactivateItem: PropTypes.func.isRequired,
    activateItemByKeyboard: PropTypes.func.isRequired,
    updateEl: PropTypes.func.isRequired,

    children: PropTypes.array.isRequired,

    isElActive: PropTypes.bool.isRequired
};

export default function MyAccountWrapper(props) {
    const {
        activateItem,
        deactivateItem,
        activateItemByKeyboard,
        updateEl,
        children,
        isElActive
    } = props;

    const elClasses = classNames('myAccount__base', {
        [`${SHARED_CLASSES.active}`]: isElActive
    });

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
        <div className={elClasses}
             ref={updateEl}
             onMouseOver={activateItem}
             onMouseOut={deactivateItem}
             onFocus={activateItem}
             onBlur={deactivateItem}
             onTouchEnd={activateItem}
             onKeyDown={activateItemByKeyboard}
             tabIndex="0"
        >
            {children}
        </div>
    );
    /* eslint-enable */
}

MyAccountWrapper.propTypes = propTypes;
