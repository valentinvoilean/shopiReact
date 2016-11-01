import React from 'react';
import Sortable from 'react-sortablejs';

import styles from './modal.scss';

// Functional Component
const ModalCell = ({items, name, saveHeaderSettings, removeItem, mediaQuery}) => {
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

        saveHeaderSettings(newState);
    };

    let itemsHTML = items[name]
        ? items[name].map((val, key) => (
            <li key={key} data-id={val}>{val} <span className={styles.close} onClick={() => removeItem({
                items,
                item: val,
                positionLists: sortable.el.children,
                position: sortable.el.className,
                mediaQuery
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
    saveHeaderSettings: React.PropTypes.func,
    mediaQuery: React.PropTypes.string
};

export default ModalCell;
