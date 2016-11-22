import React, {PropTypes} from 'react';

const ItemVIew = (props) => {

    return (<div>{props.children}</div>);
};

ItemVIew.propTypes = {
    children: PropTypes.array
};

export default ItemVIew;
