import React from 'react';
import Sortable from 'react-sortablejs';
import _ from 'lodash';

import styles from './modal.scss';

// Functional Component
const ModalCell = ({items, name, saveHeaderSettings, mediaQuery}) => {
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

    const onClickCloseButton = (val) => {
        let newState = {};
        let newItems = [];
        let htmlItems = sortable.el.children;

        for (let i = 0, max = htmlItems.length; i < max; i++) {
            newItems.push(htmlItems[i].dataset.id);
        }

        newState[mediaQuery] = {};
        newState[mediaQuery][sortable.el.className] = _.pull(newItems, val);
        newState[mediaQuery].Hidden = [...items.Hidden, val];

        saveHeaderSettings(newState);
    };

    let itemsHTML = items[name]
        ? items[name].map((val, key) => (
            <li key={key} data-id={val}>{val} <span className={styles.close} onClick={() => onClickCloseButton(val)}>&#10005;</span></li>)
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
