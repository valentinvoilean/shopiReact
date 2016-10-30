import React from 'react';
import Sortable from 'react-sortablejs';

import styles from './HeaderCell.scss';

// Functional Component
export default ({items, name}) => {

    items = items
        ? items.map((val, key) =>
        (<li key={key} data-id={val}>
            {val} <span className={styles.close}>&#10005;</span>
        </li>))
        : '';

    return (
        <Sortable
            options={{
                group: {
                    name: name,
                    put: () => true
                },
                animation: 150,
                ghostClass: styles.sortableGhost,

                onEnd: function (/**Event*/evt) {
                    console.log(evt);
                }
            }}
            className={name}
            tag="ul"
        >
            {items}
        </Sortable>
    );
};

