import React, {Component, PropTypes} from 'react';
import {DropTarget} from 'react-dnd';

import CellView from './cell.view';
import {ItemView} from 'HeaderConfigApp/components';
import {ItemTypes} from 'HeaderConfigApp/constants/itemTypes';

const cellTarget = {
    drop(props) {
        console.log(props);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

// Functional Component
class CellContainer extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);

        this._handleCloseButton = this._handleCloseButton.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    _handleCloseButton(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.dataset.id
        });
    }

    _renderOverlay(color) {
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color
            }}
            />
        );
    }

    render() {
        const {items, name, mediaQuery, connectDropTarget, isOver} = this.props;

        console.log('Is Over: ', isOver);

        const itemsHTML = items[name] ? items[name].map((item, key) => (
            <ItemView key={key} item={item}
                      onClick={this._handleCloseButton}
                      mediaQuery={mediaQuery}
                      name={name}
            />
        )) : '';

        return connectDropTarget(
            <ul>
                <CellView> {itemsHTML} </CellView>
                {isOver && this._renderOverlay('yellow')}
            </ul>
        );
    }
}

export default DropTarget(ItemTypes.COMPONENT, cellTarget, collect)(CellContainer);
