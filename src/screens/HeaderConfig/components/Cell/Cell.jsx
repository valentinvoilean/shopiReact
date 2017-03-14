import React, {PropTypes} from 'react';
import {fromJS} from 'immutable';
import uuid from 'uuid';
import Sortable from 'sortablejs';

import {CloseButton} from './components';
import styles from './Cell.scss';

import {validateState} from 'shared/utils/header';

export default class Cell extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        mediaQuery: PropTypes.string.isRequired,

        // Store Props
        data: PropTypes.object.isRequired,

        // Store Actions
        save: PropTypes.function.isRequired,
        remove: PropTypes.function.isRequired,
    };

    constructor(props) {
        super(props);

        this.sortable = null; // sortable instance

        this.sortableOptions = {
            group: {name: 'headerConfig', put: ::this.validateItem},
            animation: 150,
            ghostClass: styles.sortableGhost,
            validGroupClass: styles.cellValid,
            invalidGroupClass: styles.cellInvalid,
            onSort: ::this.handleSort,
        };

    }

    componentDidMount() {
        this.sortable = Sortable.create(this.cellRef, {...this.sortableOptions});
    }

    componentWillUnmount() {
        if (this.sortable) {
            this.sortable.destroy();
        }
    }

    validateItem(to, from, dragged) {
        const {data, mediaQuery} = this.props;

        try {
            validateState(fromJS(data).updateIn([mediaQuery, to.el.dataset.id],
                arr => arr.push(dragged.dataset.id)));
            return true;
        }
        catch (e) {
            this.updateValidationMessage(e);
            return false;
        }
    }

    handleSort({to, from}) {
        this.props.save({
            to: to.dataset.id,
            children: [...to.children].map(item => item.dataset.id),
            mediaQuery: this.props.mediaQuery,
            shouldComponentUpdate: to.dataset.id === from.dataset.id,
        });
    }

    handleCloseButton(item) {
        this.props.remove({item, from: this.sortable.el.dataset.id, mediaQuery: this.props.mediaQuery});
    }

    updateValidationMessage(message) {
        this.tooltipRef.dataset.message = message;
    }

    render() {
        const {data, name, mediaQuery} = this.props;
        const currentCell = data[mediaQuery][name];

        return (
        <div className={styles.cell}>
            <ul ref={c => this.cellRef = c} data-id={name}>
                {currentCell && currentCell.length ? currentCell.map(item => (
                    <li key={uuid.v4()} data-id={item}><span>{item}</span>
                        <CloseButton cellName={name}
                                     item={item}
                                     onClick={::this.handleCloseButton}
                                     mediaQuery={mediaQuery}
                        />
                    </li>
                    )) : null
                }
            </ul>
            <div ref={c => this.tooltipRef = c} className={styles.validationTooltip}></div>
        </div>
        );
    }
}
