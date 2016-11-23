import React, {PropTypes, Component} from 'react';
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

@DragSource(ItemTypes.COMPONENT, itemSource, collect)
export default class ItemContainer extends Component {
    static propTypes = {
        item: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {connectDragSource, isDragging, item, name, onClick, mediaQuery} = this.props;

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
    }
}
