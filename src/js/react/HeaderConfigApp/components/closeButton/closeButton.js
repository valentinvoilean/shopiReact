import React, {PropTypes} from 'react';
import {includes} from 'lodash';

import styles from './closeButton.scss';
import {validStates} from 'HeaderConfigApp/constants/states';

const CloseButtonView = ({onClick, item, mediaQuery, cellName}) => {
    const _handleClick = () => {
        onClick(item);
    };

    if (cellName === 'Hidden') {
        return null;
    }

    if (includes(validStates[mediaQuery].Hidden, item)) {
        return (<button className={styles.closeButton} onClick={_handleClick}>&#10005;</button>);
    }
    else {
        return null;
    }
};

CloseButtonView.propTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    cellName: PropTypes.string.isRequired
};

export default CloseButtonView;
