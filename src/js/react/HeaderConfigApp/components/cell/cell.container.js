import React, {Component, PropTypes} from 'react';
import {DropTarget} from 'react-dnd';
import {includes, pull} from 'lodash';

import {ItemView} from 'HeaderConfigApp/components';
import {ItemTypes} from 'HeaderConfigApp/constants/itemTypes';

import styles from 'HeaderConfigApp/styles/modal.scss';

import {validStates} from 'HeaderConfigApp/constants/states';

const cellTarget = {
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

    drop(props, monitor) {
        const to = props.name;
        const from = monitor.getItem().name;
        const save = props.actions.save;
        const mediaQuery = props.mediaQuery;
        const items = props.items;
        const dragged = monitor.getItem().item;

        if (to === from) {
            return;
        }

        save({
            [mediaQuery]: {
                [from]: pull([...items[from]], dragged),
                [to]: [...items[to], dragged]
            }
        });
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
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
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.dataset.id
        });
    }

    render() {
        const {items, name, mediaQuery, connectDropTarget, isOver, canDrop} = this.props;

        const itemsHTML = items[name] ? items[name].map((item, key) => (
            <ItemView key={key}
                      item={item}
                      onClick={this._handleCloseButton}
                      mediaQuery={mediaQuery}
                      name={name}
            />
        )) : '';

        let cellClass = isOver ? canDrop ? styles.cellValid : styles.cellInvalid : '';

        return connectDropTarget(
            <ul className={cellClass}>
                {itemsHTML}
            </ul>
        );
    }
}

export default DropTarget(ItemTypes.COMPONENT, cellTarget, collect)(CellContainer);
