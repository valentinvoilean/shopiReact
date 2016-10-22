import React from 'react';
import Sortable from 'react-sortablejs';

// Functional Component
const HeaderCell = ({items}) => {
    items = items ? items.map((val, key) => (<li key={key} data-id={val}>{val}</li>)) : '';

    return (
        <Sortable
            // See all Sortable options at https://github.com/RubaXa/Sortable#options
            options={{
                group: 'shared'
            }}
            tag="ul"
        >
            {items}
        </Sortable>
    );
};

export default HeaderCell;
