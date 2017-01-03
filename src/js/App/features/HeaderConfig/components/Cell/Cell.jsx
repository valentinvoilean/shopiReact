import React, {Component, PropTypes} from 'react';
import uuid from 'uuid';
import Sortable from 'sortablejs';

import {CloseButton} from '../';
import styles from './Cell.scss';

import {validateState} from 'App/utils/header';

const propTypes = {
    globalState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    mediaQuery: PropTypes.string.isRequired
};

const defaultProps = {
    globalState: {},
    actions: {},
    name: '',
    mediaQuery: ''
};

class Cell extends Component {
    constructor(props) {
        super(props);

        this.handleCloseButton = this.handleCloseButton.bind(this);
        this.handleCellRef = this.handleCellRef.bind(this);
        this.handleTooltipRef = this.handleTooltipRef.bind(this);
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
        group: {name: 'headerConfig', put: this.validateItem.bind(this)},
        animation: 150,
        ghostClass: styles.sortableGhost,
        validGroupClass: styles.cellValid,
        invalidGroupClass: styles.cellInvalid,
        onSort: this.handleSort.bind(this)
    };

    validateItem(to, from, dragged) {
        const {globalState, mediaQuery} = this.props;

        try {
            validateState(globalState.updateIn(['data', mediaQuery, to.el.dataset.id],
                arr => arr.push(dragged.dataset.id)));
            return true;
        }
        catch (e) {
            this.updateValidationMessage(e);
            return false;
        }
    }

    handleSort({to, from}) {
        this.props.actions.save({
            to: to.dataset.id,
            children: [...to.children].map(item => item.dataset.id),
            mediaQuery: this.props.mediaQuery,
            shouldComponentUpdate: to.dataset.id === from.dataset.id
        });
    }

    handleCloseButton(item) {
        this.props.actions.remove({item, from: this.sortable.el.dataset.id, mediaQuery: this.props.mediaQuery});
    }

    handleCellRef(cellRef) {
        this.cellRef = cellRef;
    }

    handleTooltipRef(tooltipRef) {
        this.tooltipRef = tooltipRef;
    }

    updateValidationMessage(message) {
        this.tooltipRef.dataset.message = message;
    }

    render() {
        const {globalState, name, mediaQuery} = this.props;
        const currentCell = globalState.getIn(['data', mediaQuery, name]);

        const itemsHTML = currentCell && currentCell.toJS().length ? currentCell.toJS().map((item) => (
            <li key={uuid.v4()} data-id={item}><span>{item}</span>
                <CloseButton cellName={name}
                             item={item}
                             onClick={this.handleCloseButton}
                             mediaQuery={mediaQuery}
                />
            </li>)
        ) : '';

        return (
        <div className={styles.cell}>
            <ul ref={this.handleCellRef} data-id={name}>
                {itemsHTML}
            </ul>
            <div ref={this.handleTooltipRef} className={styles.validationTooltip}></div>
        </div>
        );
    }
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
