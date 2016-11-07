import React from 'react';
import ReactDOM from 'react-dom';
import {includes} from 'lodash';
import Sortable from 'sortablejs';

import Cell from 'HeaderConfigApp/components/cell.jsx';
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
        return <Cell items={this.props.items}
                     name={this.props.name}
                     onClick={this._removeItem.bind(this)}/>;
    }

    _addHoverClass() {
        this.setState({hoverClass: styles.cellValid});
    }

    _removeHoverClass() {
        this.setState({hoverClass: null});
    }

    _onItemDropped({to, from}) {
        const {actions, mediaQuery} = this.props;

        to.className = styles.cellValid;
        from.className = styles.cellValid;

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
            to.className = styles.cellInvalid;
            return false;
        }

        to.className = includes(newList, 'Logo') ? styles.cellInvalid : styles.cellValid;
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
