import React, {PropTypes} from 'react';
import {includes} from 'lodash';

import styles from './CloseButton.scss';
import {validStates} from 'common/constants/headerSettings';

function CloseButton({onClick, item, mediaQuery, cellName}) {
    const _handleClick = () => {
        onClick(item);
    };

    if (cellName === 'Hidden') {
        return null;
    }

    if (includes(validStates.get(mediaQuery).Hidden, item)) {
        return (<button className={styles.closeButton} onClick={_handleClick}>&#10005;</button>);
    }
    else {
        return null;
    }
}

CloseButton.propTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    cellName: PropTypes.string.isRequired
};

CloseButton.defaultProps = {
    item: '',
    onClick: function () {},
    mediaQuery: '',
    cellName: ''
};

export default CloseButton;
