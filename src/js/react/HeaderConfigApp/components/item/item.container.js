import React, {PropTypes, Component} from 'react';
import {ItemTypes} from 'HeaderConfigApp/constants/itemTypes';
import {DragSource, DropTarget} from 'react-dnd';

import {CloseButtonView} from 'HeaderConfigApp/components';

const target = {
    hover(props, monitor) {
        const dragItem = monitor.getItem().item;
        const hoverItem = props.item;
        const mediaQuery = props.mediaQuery;

        // Don't replace items with themselves
        if (dragItem !== hoverItem) {
            props.onMove({dragItem, hoverItem, mediaQuery});
        }
    }
};

const source = {
    beginDrag(props) {
        return props;
    }
};

@DropTarget(ItemTypes.COMPONENT, target, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
}))
@DragSource(ItemTypes.COMPONENT, source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class ItemContainer extends Component {
    static propTypes = {
        item: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        isOver: PropTypes.bool.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {connectDragSource, connectDropTarget, isDragging, isOver, item, name, onClick, mediaQuery} = this.props;

        return connectDragSource(connectDropTarget(
            <li style={{ opacity: isDragging || isOver ? 0.5 : 1, cursor: 'move'}}>
                <span>{item}</span>
                <CloseButtonView cellName={name} item={item} onClick={onClick} mediaQuery={mediaQuery} />
            </li>
        ));
    }
}
