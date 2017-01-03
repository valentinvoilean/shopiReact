import React, {PropTypes} from 'react';
import {includes} from 'lodash';

import styles from './CloseButton.scss';
import {validStates} from 'App/constants/headerSettings';

const propTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    cellName: PropTypes.string.isRequired
};

const defaultProps = {
    item: '',
    onClick: function () {},
    mediaQuery: '',
    cellName: ''
};

function CloseButton({onClick, item, mediaQuery, cellName}) {
    const handleClick = () => {
        onClick(item);
    };

    if (cellName === 'Hidden') {
        return null;
    }

    if (includes(validStates.get(mediaQuery).Hidden, item)) {
        return (<button className={styles.closeButton} onClick={handleClick}>&#10005;</button>);
    }
    else {
        return null;
    }
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
