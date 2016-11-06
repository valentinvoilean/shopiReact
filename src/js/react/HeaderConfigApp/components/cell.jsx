import React from 'react';

import CloseButton from './closeButton.jsx';

// Functional Component
const Cell = props => {
    const {items, name, className, onClick} = props;

    const itemsHTML = items[name] ? items[name].map((item, key) => (
        <li key={key} data-id={item}>
            <span>{item}</span>
            <CloseButton item={item} onClick={onClick}/>
        </li>)
    ) : '';

    return (
        <ul data-id={name} className={className}> {itemsHTML} </ul>
    );
};

Cell.propTypes = {
    items: React.PropTypes.object,
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Cell;
