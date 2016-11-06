import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'sortablejs';
import {includes} from 'lodash';

import CloseButton from 'HeaderConfigApp/components/closeButton.jsx';
import styles from 'HeaderConfigApp/styles/modal.scss';

// Functional Component
class CellContainer extends React.Component {
    static propTypes = {
        items: React.PropTypes.object,
        name: React.PropTypes.string,
        actions: React.PropTypes.object,
        remove: React.PropTypes.func,
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

    state = {
        hoverClass: null
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
        const el = ReactDOM.findDOMNode(this);
        el.addEventListener('dragover', this._addHoverClass.bind(this));
        el.addEventListener('dragleave', this._removeHoverClass.bind(this));
        el.addEventListener('drop', this._removeHoverClass.bind(this));
        this.sortable = Sortable.create(ReactDOM.findDOMNode(this), {...this.sortableOptions});
    }

    componentWillUnmount() {
        const el = ReactDOM.findDOMNode(this);
        el.removeEventListener('dragover', this._addHoverClass.bind(this));
        el.removeEventListener('dragleave', this._removeHoverClass.bind(this));
        el.removeEventListener('drop', this._removeHoverClass.bind(this));

        if (this.sortable) {
            this.sortable.destroy();
            this.sortable = null;
        }
    }

    render() {
        return (
            <ul data-id={this.props.name} className={this.state.hoverClass}> {this.itemsHTML} </ul>
        );
    }

    _addHoverClass() {
        this.setState({hoverClass: styles.cellValid});
    }

    _removeHoverClass() {
        this.setState({hoverClass: null});
    }

    _onItemDropped({to, from}) {
        const {actions, mediaQuery} = this.props;

        actions.save({
            [mediaQuery]: {
                [to.dataset.id]: [...to.children].map(item => item.dataset.id),
                [from.dataset.id]: [...from.children].map(item => item.dataset.id)
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
            position: this.sortable.el.dataset.id
        });
    }
}

export default CellContainer;
