import React from 'react';
import Sortable from 'react-sortablejs';
import CSSModules from 'react-css-modules';

import styles from './HeaderCell.scss';

// Functional Component
const HeaderCell = ({items}) => {

    items = items ? items.map((val, key) => (<li key={key} data-id={val}>{val} <span styleName='close'>&#10005;</span></li>)) : '';

    return (
        <Sortable
            // See all Sortable options at https://github.com/RubaXa/Sortable#options
            options={{
                group: 'shared',
                animation: 150,
                ghostClass: styles.sortableGhost,

                onEnd: function (/**Event*/evt) {
                    console.warn(evt);
                },

                store: {
                    /**
                     * Get the order of elements. Called once during initialization.
                     * @param   {Sortable}  sortable
                     * @returns {Array}
                     */
                    get: function (sortable) {
                        let order = localStorage.getItem(sortable.options.group.name);
                        return order ? order.split('|') : [];
                    },

                    /**
                     * Save the order of elements. Called onEnd (when the item is dropped).
                     * @param {Sortable}  sortable
                     */
                    set: function (sortable) {
                        let order = sortable.toArray();
                        localStorage.setItem(sortable.options.group.name, order.join('|'));
                    }
                }
            }}
            className='test'
            tag="ul"
        >
            {items}
        </Sortable>
    );
};

export default CSSModules(HeaderCell, styles, {allowMultiple: true});
