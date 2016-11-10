import React from 'react';
import ReactDOM from 'react-dom';
import {includes} from 'lodash';
import Sortable from 'sortablejs';

import Cell from 'HeaderConfigApp/components/cell.jsx';
import styles from 'HeaderConfigApp/styles/modal.scss';

import {validStates} from 'HeaderConfigApp/constants/states';

// Functional Component
export default class CellContainer extends React.Component {
    static propTypes = {
        items: React.PropTypes.object,
        name: React.PropTypes.string,
        actions: React.PropTypes.object,
        remove: React.PropTypes.func,
        mediaQuery: React.PropTypes.string
    };

    sortable = null; // sortable instance

    sortableOptions = {
        group: {name: 'headerConfig', put: (to, from, dragged) => {
            return !!includes(validStates[this.props.mediaQuery][to.el.dataset.id], dragged.dataset.id);
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
        return <Cell items={this.props.items}
                     name={this.props.name}
                     mediaQuery={this.props.mediaQuery}
                     onClick={this._removeItem.bind(this)}/>;
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

    _removeItem(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.dataset.id
        });
    }
}
