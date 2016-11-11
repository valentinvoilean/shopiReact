import React from 'react';

import styles from 'HeaderConfigApp/styles/modal.scss';

const CloseButton = ({onClick, item}) => (
    <span className={styles.close} onClick={() => onClick(item)}>&#10005;</span>
);

CloseButton.propTypes = {
    item: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default CloseButton;
