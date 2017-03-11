import React, {PropTypes} from 'react';
import uuid from 'uuid';
import Sortable from 'sortablejs';

import {CloseButton} from './components';
import styles from './Cell.scss';

import {validateState} from 'shared/utils/header';

export default class Cell extends React.PureComponent {
    static propTypes = {
        globalState: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        mediaQuery: PropTypes.string.isRequired,
    };

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
        group: {name: 'headerConfig', put: ::this.validateItem},
        animation: 150,
        ghostClass: styles.sortableGhost,
        validGroupClass: styles.cellValid,
        invalidGroupClass: styles.cellInvalid,
        onSort: ::this.handleSort,
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
            shouldComponentUpdate: to.dataset.id === from.dataset.id,
        });
    }

    handleCloseButton(item) {
        this.props.actions.remove({item, from: this.sortable.el.dataset.id, mediaQuery: this.props.mediaQuery});
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
                             onClick={::this.handleCloseButton}
                             mediaQuery={mediaQuery}
                />
            </li>)
        ) : '';

        return (
        <div className={styles.cell}>
            <ul ref={c => this.cellRef = c} data-id={name}>
                {itemsHTML}
            </ul>
            <div ref={c => this.tooltipRef = c} className={styles.validationTooltip}></div>
        </div>
        );
    }
}
