import { includes } from 'lodash';

import React from 'react';
import Sortable from 'react-sortablejs';

import styles from 'HeaderConfigApp/styles/modal.scss';

// Functional Component
const Cell = props => {
    const {items, name, actions, mediaQuery} = props;

    let sortable = null; // sortable instance

    const sortableOptions = {
        group: { name: name, put: () => true },
        animation: 150,
        ghostClass: styles.sortableGhost,
        onEnd({to, from}) {
            actions.save({
                [mediaQuery]: {
                    [to.className]: [...to.children].map(item => item.dataset.id),
                    [from.className]: [...from.children].map(item => item.dataset.id)
                }
            });
        },
        onMove({to, dragged}) {
            const newList = [...to.children].map((item) => item.dataset.id);
            const draggedItem = dragged.dataset.id;

            if (draggedItem === 'Logo' && newList.length > 0) {
                return false;
            }

            return !includes(newList, 'Logo');
        }
    };

    const itemsHTML = items[name]
        ? items[name].map((item, key) => (
            <li key={key} data-id={item}>{item} <span className={styles.close} onClick={() => actions.remove({
                items, item, mediaQuery,
                positionLists: sortable.el.children,
                position: sortable.el.className
            })}>&#10005;</span></li>)
         ) : '';

    return (
        <Sortable
            className={name}
            tag="ul"
            options={sortableOptions}
            ref={(c) => { if (c) { sortable = c.sortable; } }}>
            {itemsHTML}
        </Sortable>
    );
};

Cell.propTypes = {
    items: React.PropTypes.object,
    name: React.PropTypes.string,
    actions: React.PropTypes.object,
    remove: React.PropTypes.func,
    mediaQuery: React.PropTypes.string
};

export default Cell;
