import React from 'react';
import Sortable from 'react-sortablejs';

import styles from './modal.scss';

// Functional Component
const ModalCell = (props) => {
    const {items, name, save, remove, mediaQuery} = props;

    let sortable = null; // sortable instance

    const sortableOptions = {
        group: { name: name, put: () => true },
        animation: 150,
        ghostClass: styles.sortableGhost
    };

    const onChange = (newItems, sortable) => {
        let newState = {};

        newState[mediaQuery] = {};
        newState[mediaQuery][sortable.el.className] = newItems;

        save(newState);
    };

    const itemsHTML = items[name]
        ? items[name].map((item, key) => (
            <li key={key} data-id={item}>{item} <span className={styles.close} onClick={() => remove({
                items, item, mediaQuery,
                positionLists: sortable.el.children,
                position: sortable.el.className
            })}>&#10005;</span></li>)
         ) : '';

    return (
        <Sortable
            onChange={onChange}
            className={name}
            tag="ul"
            options={sortableOptions}
            ref={(c) => { if (c) { sortable = c.sortable; } }}>
            {itemsHTML}
        </Sortable>
    );
};

ModalCell.propTypes = {
    items: React.PropTypes.object,
    name: React.PropTypes.string,
    save: React.PropTypes.func,
    mediaQuery: React.PropTypes.string
};

export default ModalCell;
