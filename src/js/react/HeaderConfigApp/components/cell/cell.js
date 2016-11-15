import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {includes} from 'lodash';
import Sortable from 'sortablejs';

import {CloseButton} from 'HeaderConfigApp/components';

import styles from 'HeaderConfigApp/styles/modal.scss';
import {validStates} from 'HeaderConfigApp/constants/states';

// Functional Component
class Cell extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    sortable = null; // sortable instance

    sortableOptions = {
        group: {name: 'headerConfig', put: (to, from, dragged) => {
            if (validStates[this.props.mediaQuery][to.el.dataset.id] instanceof Array) {
                return !!includes(validStates[this.props.mediaQuery][to.el.dataset.id], dragged.dataset.id);
            }
            else {
                const items = validStates[this.props.mediaQuery][to.el.dataset.id].items;
                const maxItems = validStates[this.props.mediaQuery][to.el.dataset.id].max;

                if (to.el.children.length >= maxItems) {
                    console.log(`Maximum number of items allowed is ${maxItems}`);
                    return false;
                }

                if (!includes(items, dragged.dataset.id)) {
                    console.log(`The item "${dragged.dataset.id}" is not allowed here!`);
                    return false;
                }

                return true;
            }
        }},
        animation: 150,
        ghostClass: styles.sortableGhost,
        validGroupClass: styles.cellValid,
        invalidGroupClass: styles.cellInvalid,
        onEnd: this._onItemDropped.bind(this)
    };

    componentDidMount() {
        this.sortable = Sortable.create(ReactDOM.findDOMNode(this), {...this.sortableOptions});
    }

    componentWillUnmount() {
        if (this.sortable) {
            this.sortable.destroy();
            this.sortable = null;
        }
    }

    render() {
        const {items, name} = this.props;

        const itemsHTML = items[name] ? items[name].map((item, key) => (
            <li key={key} data-id={item}><span>{item}</span> {this._showCloseButton(item)} </li>)
        ) : '';

        return <ul data-id={name}> {itemsHTML} </ul>;
    }

    _showCloseButton(item) {
        if (this.props.name === 'Hidden') {
            return false;
        }

        if (includes(validStates[this.props.mediaQuery].Hidden, item)) {
            return <CloseButton item={item} onClick={this._removeItem.bind(this)}/>;
        }
    };

    _onItemDropped({to, from}) {
        const {actions, mediaQuery} = this.props;

        actions.save({
            [mediaQuery]: {
                [to.dataset.id]: [...to.children].map(item => item.dataset.id),
                [from.dataset.id]: [...from.children].map(item => item.dataset.id)
            }
        });
    }

    _removeItem(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.dataset.id
        });
    }
}

export default Cell;
