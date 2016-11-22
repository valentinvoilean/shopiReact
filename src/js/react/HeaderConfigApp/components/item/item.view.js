import React, {PropTypes} from 'react';
import {ItemTypes} from 'HeaderConfigApp/constants/itemTypes';
import {DragSource} from 'react-dnd';

import {CloseButtonView} from 'HeaderConfigApp/components';

const itemSource = {
    beginDrag(props) {
        return props;
    }
};

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

const ItemVIew = (props) => {
    const {connectDragSource, isDragging, item, name, onClick, mediaQuery} = props;

    return connectDragSource(
        <li style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move'
        }}
        ><span>{item}</span>
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
    name: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.COMPONENT, itemSource, collect)(ItemVIew);
