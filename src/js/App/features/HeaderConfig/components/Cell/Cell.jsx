import React, {Component, PropTypes} from 'react';
import uuid from 'uuid';
import Sortable from 'sortablejs';
import {Intent, Tag} from '@blueprintjs/core';
import {includes} from 'lodash';


import styles from './Cell.scss';
import {validStates} from 'App/constants/headerSettings';

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
        this.checkIfRemovable = this.checkIfRemovable.bind(this);
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

    updateValidationMessage(message) {
        this.tooltipRef.dataset.message = message;
    }

    checkIfRemovable(item) {
        const {name, mediaQuery} = this.props;

        if (includes(validStates.get(mediaQuery).Hidden, item) && name !== 'Hidden') {
            return () => this.handleCloseButton(item);
        }

        return null;
    }

    render() {
        const {globalState, name, mediaQuery} = this.props;
        const currentCell = globalState.getIn(['data', mediaQuery, name]);
        let itemsHTML = null;

        if (currentCell && currentCell.toJS().length) {
            itemsHTML = currentCell.toJS().map((item) => (
                <Tag key={uuid.v4()}
                     data-id={item}
                     className={styles.cellTag}
                     intent={Intent.PRIMARY}
                     onRemove={this.checkIfRemovable(item)}
                >
                    {item}
                </Tag>
            ));
        }

        return (
        <div className={styles.cell}>
            <span className={styles.cellTags} ref={(c) => this.cellRef = c} data-id={name}>
                {itemsHTML}
            </span>
            <div ref={(c) => this.tooltipRef = c} className={styles.validationTooltip}></div>
        </div>
        );
    }
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
