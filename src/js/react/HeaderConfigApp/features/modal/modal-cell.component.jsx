import React from 'react';
import Sortable from 'react-sortablejs';

import styles from './modal.scss';

// Functional Component
const ModalCell = ({items, name, saveHeaderSettings, mediaQuery}) => {
    const closeButton = <span className={styles.close}>&#10005;</span>;
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

    items = items ? items.map((val, key) => (<li key={key} data-id={val}>{val} {closeButton}</li>)) : '';

    return (
        <Sortable onChange={onChange} className={name} tag="ul" options={sortableOptions}>
            {items}
        </Sortable>
    );
};

ModalCell.propTypes = {
    items: React.PropTypes.array,
    name: React.PropTypes.string,
    saveHeaderSettings: React.PropTypes.func,
    mediaQuery: React.PropTypes.string
};

export default ModalCell;
