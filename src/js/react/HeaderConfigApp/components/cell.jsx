import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'sortablejs';
import {includes} from 'lodash';

import CloseButton from './closeButton.jsx';
import styles from 'HeaderConfigApp/styles/modal.scss';

// Functional Component
class Cell extends React.Component {

    static propTypes = {
        items: React.PropTypes.object,
        name: React.PropTypes.string,
        actions: React.PropTypes.object,
        mediaQuery: React.PropTypes.string
    };

    sortable = null; // sortable instance

    sortableOptions = {
        group: {name: 'headerConfig'},
        animation: 150,
        ghostClass: styles.sortableGhost,
        onEnd: this._onItemDropped.bind(this),
        onMove: this._onItemMoved.bind(this)
    };

    constructor(props) {
        super(props);

        const {items, name} = props;

        this.itemsHTML = items[name] ? items[name].map((item, key) => (
            <li key={key} data-id={item}>
                <span>{item}</span>
                <CloseButton item={item} onClick={this._removeItem.bind(this)}/>
            </li>)
        ) : '';
    }

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
        return (
            <ul className={this.props.name}> {this.itemsHTML} </ul>
        );
    }

    _onItemDropped({to, from}) {
        const {actions, mediaQuery} = this.props;

        actions.save({
            [mediaQuery]: {
                [to.className]: [...to.children].map(item => item.dataset.id),
                [from.className]: [...from.children].map(item => item.dataset.id)
            }
        });
    }

    _onItemMoved({to, dragged}) {
        const newList = [...to.children].map((item) => item.dataset.id);
        const draggedItem = dragged.dataset.id;

        if (draggedItem === 'Logo' && newList.length > 0) {
            return false;
        }

        return !includes(newList, 'Logo');
    }

    _removeItem(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.className
        });
    }
}

export default Cell;
