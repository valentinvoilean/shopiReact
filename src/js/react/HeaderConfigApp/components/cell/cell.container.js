import React, {Component, PropTypes} from 'react';
import {DropTarget} from 'react-dnd';
import {includes, pull} from 'lodash';

import {ItemsView} from 'HeaderConfigApp/components';

import {ItemTypes} from 'HeaderConfigApp/constants/itemTypes';

import {validStates} from 'HeaderConfigApp/constants/states';

const target = {
    canDrop(props, monitor) {
        const to = props.name;
        const mediaQuery = props.mediaQuery;
        const dragged = monitor.getItem().item;


        if (validStates[mediaQuery][to] instanceof Array) {
            return !!includes(validStates[mediaQuery][to], dragged);
        }
        else {
            const items = validStates[mediaQuery][to].items;
            const maxItems = validStates[mediaQuery][to].max;

            if (props.items[to].length >= maxItems) {
                console.log(`Maximum number of items allowed is ${maxItems}`);
                return false;
            }

            if (!includes(items, dragged)) {
                console.log(`The item "${dragged}" is not allowed here!`);
                return false;
            }

            return true;
        }
    },

    drop(targetProps, monitor) {
        const to = targetProps.name;
        const from = monitor.getItem().name;
        const save = targetProps.actions.save;
        const mediaQuery = targetProps.mediaQuery;
        const items = targetProps.items;
        const dragged = monitor.getItem().item;
        const targetCell = targetProps.items[to];

        if (!includes(targetCell, dragged)) {
            save({
                [mediaQuery]: {
                    [to]: [...items[to], dragged],
                    [from]: pull([...items[from]], dragged)
                }
            });
        }
    }
};

@DropTarget(ItemTypes.COMPONENT, target, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
}))
export default class CellContainer extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);

        this._handleCloseButton = this._handleCloseButton.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    _handleCloseButton(item) {
        const {items, actions, mediaQuery, name} = this.props;
        actions.remove({ items, item, mediaQuery, name });
    }

    render() {
        const {connectDropTarget} = this.props;

        return connectDropTarget(
            <div>
                <ItemsView {...this.props} onCloseButton={this._handleCloseButton} />
            </div>
        );
    }
}

