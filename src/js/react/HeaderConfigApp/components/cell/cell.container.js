import React, {Component, PropTypes} from 'react';
import {includes} from 'lodash';
import Sortable from 'sortablejs';

import {ItemsView} from 'HeaderConfigApp/components';
import styles from 'HeaderConfigApp/styles/modal.scss';
import {validStates} from 'HeaderConfigApp/constants/states';

// Functional Component
class CellContainer extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this._handleCloseButton = this._handleCloseButton.bind(this);
        this._handleCellRef = this._handleCellRef.bind(this);
    }

    componentDidMount() {
        this.sortable = Sortable.create(this.cellRef, {...this.sortableOptions});
    }

    componentWillUnmount() {
        if (this.sortable) {
            this.sortable.destroy();
            this.sortable = null;
        }
    }

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
        onSort: this._onItemDropped.bind(this)
    };

    _onItemDropped({to, from}) {
        const {actions, mediaQuery} = this.props;
        actions.save({mediaQuery, to, from});
    }

    _handleCloseButton(item) {
        const {actions, mediaQuery} = this.props;
        actions.remove({item, mediaQuery, oldPosition: this.sortable.el.dataset.id});
    }

    _handleCellRef(cellRef) {
        this.cellRef = cellRef;
    }

    render() {
        const {items, name, mediaQuery} = this.props;

        return (
            <ItemsView cellRef={this._handleCellRef}
                      items={items}
                      name={name}
                      onClickCloseButton={this._handleCloseButton}
                      mediaQuery={mediaQuery}
            />
        );
    }
}

export default CellContainer;
