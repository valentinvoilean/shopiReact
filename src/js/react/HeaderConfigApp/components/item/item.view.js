import React, {PropTypes} from 'react';

import {CloseButtonView} from 'HeaderConfigApp/components';

const ItemVIew = ({item, name, onClick, mediaQuery}) => {

    return (
        <li><span>{item}</span>
            <CloseButtonView cellName={name}
                             item={item}
                             onClick={onClick}
                             mediaQuery={mediaQuery}
            />
        </li>
    );
};

ItemVIew.propTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ItemVIew;
