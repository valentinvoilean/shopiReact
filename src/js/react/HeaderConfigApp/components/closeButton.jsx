import React from 'react';

import styles from 'HeaderConfigApp/styles/modal.scss';

export default ({onClick, item}) => (
    <span className={styles.close} onClick={() => onClick(item)}>&#10005;</span>
);
