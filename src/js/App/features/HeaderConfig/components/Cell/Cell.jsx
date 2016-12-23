import React, {Component, PropTypes} from 'react';
import uuid from 'uuid';
import Sortable from 'sortablejs';

import {CloseButton} from 'HeaderConfig/components';
import styles from './Cell.scss';

import {validateState} from 'HeaderConfig/utils';

// Functional Component
export default class Cell extends Component {
    static propTypes = {
        globalState: PropTypes.object.isRequired,
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
        }
    }

    sortable = null; // sortable instance

    sortableOptions = {
        group: {name: 'headerConfig', put: this._validateItem.bind(this)},
        animation: 150,
        ghostClass: styles.sortableGhost,
        validGroupClass: styles.cellValid,
        invalidGroupClass: styles.cellInvalid,
        onSort: this._handleSort.bind(this)
    };

    _validateItem(to, from, dragged) {
        const {globalState, mediaQuery} = this.props;

        try {
            validateState(globalState.updateIn(['data', mediaQuery, to.el.dataset.id],
                arr => arr.push(dragged.dataset.id)));
            return true;
        }
        catch (e) {
            this._updateValidationMessage(e);
            return false;
        }
    }

    _handleSort({to, from}) {
        this.props.actions.save({
            to: to.dataset.id,
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
        const {globalState, name, mediaQuery} = this.props;
        const currentCell = globalState.getIn(['data', mediaQuery, name]);

        const itemsHTML = currentCell && currentCell.toJS().length ? currentCell.toJS().map((item) => (
            <li key={uuid.v4()} data-id={item}><span>{item}</span>
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