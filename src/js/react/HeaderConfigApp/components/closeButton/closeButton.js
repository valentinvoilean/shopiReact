import React from 'react';

import styles from './closeButton.scss';

const CloseButton = ({onClick, item}) => {
    const _handleClick = () => {
        onClick(item);
    };

    return (
        <span className={styles.closeButton} onClick={_handleClick}>&#10005;</span>
    );
};

CloseButton.propTypes = {
    item: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default CloseButton;
