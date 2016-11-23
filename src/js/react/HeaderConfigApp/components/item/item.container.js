import React, {PropTypes, Component} from 'react';
import {ItemTypes} from 'HeaderConfigApp/constants/itemTypes';
import {DragSource, DropTarget} from 'react-dnd';

import {CloseButtonView} from 'HeaderConfigApp/components';

const itemTarget = {
    hover(props, monitor, component) {
        console.log(props, monitor, component);
    }
};

const itemSource = {
    beginDrag(props) {
        return props;
    }
};

const collectSource = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
});

const collectTarget = connect => ({
    connectDropTarget: connect.dropTarget()
});

@DropTarget(ItemTypes.COMPONENT, itemTarget, collectTarget)
@DragSource(ItemTypes.COMPONENT, itemSource, collectSource)
export default class ItemContainer extends Component {
    static propTypes = {
        item: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {connectDragSource, connectDropTarget, isDragging, item, name, onClick, mediaQuery} = this.props;

        return connectDragSource(connectDropTarget(
            <li style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
                <span>{item}</span>
                <CloseButtonView cellName={name} item={item} onClick={onClick} mediaQuery={mediaQuery} />
            </li>
        ));
    }
}
