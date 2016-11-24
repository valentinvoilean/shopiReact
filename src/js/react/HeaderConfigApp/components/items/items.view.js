import React, {PropTypes} from 'react';

import {CloseButtonView} from 'HeaderConfigApp/components';

const ItemsView = ({items, name, onClickCloseButton, mediaQuery, cellRef}) => {

    const itemsHTML = items[name] ? items[name].map((item, key) => (
        <li key={key} data-id={item}><span>{item}</span>
            <CloseButtonView cellName={name}
                             item={item}
                             onClick={onClickCloseButton}
                             mediaQuery={mediaQuery}
            />
        </li>)
    ) : '';

    return (<ul ref={cellRef} data-id={name}> {itemsHTML} </ul>);
};

ItemsView.propTypes = {
    items: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onClickCloseButton: PropTypes.func.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    cellRef: PropTypes.func.isRequired
};

export default ItemsView;
