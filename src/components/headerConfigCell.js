import React from 'react';
import Sortable from 'react-sortablejs';
import CSSModules from 'react-css-modules';

import styles from 'styles/components/configBox/config-box.scss';

// Functional Component
const HeaderCell = ({items}) => {
    items = items ? items.map((val, key) => (<li key={key} data-id={val}>{val} <span styleName='close'>&#10005;</span></li>)) : '';

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

export default CSSModules(HeaderCell, styles, {allowMultiple: true});
