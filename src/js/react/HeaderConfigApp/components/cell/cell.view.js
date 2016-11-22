import React, {PropTypes} from 'react';

const ItemVIew = (props) => {

    return (<ul>{props.children}</ul>);
};

ItemVIew.propTypes = {
    children: PropTypes.array
};

export default ItemVIew;
