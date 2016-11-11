import React from 'react';
import {includes} from 'lodash';
import {validStates} from 'HeaderConfigApp/constants/states';

import CloseButton from './closeButton';

// Functional Component
const Cell = props => {
    const {items, name, onClick, mediaQuery} = props;

    const _showCloseButton = (item) => {
        if (includes(validStates[mediaQuery].Hidden, item)) {
            return <CloseButton item={item} onClick={onClick}/>;
        }
    };

    const itemsHTML = items[name] ? items[name].map((item, key) => (
        <li key={key} data-id={item}> <span>{item}</span> {_showCloseButton(item)} </li>)
    ) : '';

    return (
        <ul data-id={name}> {itemsHTML} </ul>
    );
};

Cell.propTypes = {
    items: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    mediaQuery: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default Cell;
