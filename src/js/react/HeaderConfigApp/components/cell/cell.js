import React, {Component, PropTypes} from 'react';
import {includes} from 'lodash';
import Sortable from 'sortablejs';

import {CloseButton} from 'HeaderConfigApp/components';
import styles from './cell.scss';
import {validStates} from 'HeaderConfigApp/constants/states';

// Functional Component
class Cell extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        mediaQuery: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this._handleCloseButton = this._handleCloseButton.bind(this);
        this._handleCellRef = this._handleCellRef.bind(this);
        this._handleTooltipRef = this._handleTooltipRef.bind(this);
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
                const items = validStates[this.props.mediaQuery][to.el.dataset.id];

                if (includes(items, dragged.dataset.id)) {
                    return true;
                }

                this._updateValidationMessage(`Only the ${items.join(', ')} ${items.length > 1 ? 'are' : 'is'} allowed here.`);
                return false;
            }
            else {
                const items = validStates[this.props.mediaQuery][to.el.dataset.id].items;
                const maxItems = validStates[this.props.mediaQuery][to.el.dataset.id].max;

                if (maxItems && to.el.children.length >= maxItems) {
                    this._updateValidationMessage(`Maximum number of items allowed is ${maxItems} `);
                    return false;
                }

                if (!includes(items, dragged.dataset.id)) {
                    this._updateValidationMessage(`The item "${dragged.dataset.id}" is not allowed here!`);
                    return false;
                }

                return true;
            }
        }},
        animation: 150,
        ghostClass: styles.sortableGhost,
        validGroupClass: styles.cellValid,
        invalidGroupClass: styles.cellInvalid,
        onSort: this._handleSort.bind(this)
    };

    _handleSort({to, from}) {
        this.props.actions.save({
            to: [to.dataset.id],
            children: [...to.children].map(item => item.dataset.id),
            mediaQuery: this.props.mediaQuery,
            shouldComponentUpdate: to.dataset.id === from.dataset.id
        });
    }

    _handleCloseButton(item) {
        this.props.actions.remove({item, from: this.sortable.el.dataset.id, mediaQuery: this.props.mediaQuery});
    }

    _handleCellRef(cellRef) {
        this.cellRef = cellRef;
    }

    _handleTooltipRef(tooltipRef) {
        this.tooltipRef = tooltipRef;
    }

    _updateValidationMessage(message) {
        this.tooltipRef.dataset.message = message;
    }

    render() {
        const {items, name, mediaQuery} = this.props;

        const itemsHTML = items[name] ? items[name].map((item, key) => (
            <li key={key} data-id={item}><span>{item}</span>
                <CloseButton cellName={name}
                                 item={item}
                                 onClick={this._handleCloseButton}
                                 mediaQuery={mediaQuery}
                />
            </li>)
        ) : '';

        return (
        <div className={styles.cell}>
            <ul ref={this._handleCellRef} data-id={name}>
                {itemsHTML}
            </ul>
            <div ref={this._handleTooltipRef} className={styles.validationTooltip}></div>
        </div>
        );
    }
}

export default Cell;
