import React from 'react';
import Sortable from 'react-sortablejs';

import styles from './HeaderCell.scss';

// Functional Component
export default ({items, name, onChange, onEnd}) => {
    const closeButton = <span className={styles.close}>&#10005;</span>;
    const sortableOptions = {
        group: { name: name, put: () => true },
        animation: 150,
        ghostClass: styles.sortableGhost,
        onEnd: onEnd
    };

    items = items ? items.map((val, key) => (<li key={key} data-id={val}>{val} {closeButton}</li>)) : '';

    return (
        <Sortable onChange={onChange} className={name} tag="ul" options={sortableOptions}>
            {items}
        </Sortable>
    );
};

