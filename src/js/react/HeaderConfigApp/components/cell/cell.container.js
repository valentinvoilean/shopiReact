import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {includes} from 'lodash';
import Sortable from 'sortablejs';

import * as actions from 'HeaderConfigApp/redux/modules/modal';

import {CloseButtonView} from 'HeaderConfigApp/components';
import styles from 'HeaderConfigApp/styles/modal.scss';
import {validStates} from 'HeaderConfigApp/constants/states';

// Functional Component
@connect(
    state => ({globalState: state.headerConfig}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)
export default class CellContainer extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        mediaQuery: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired,
        globalState: PropTypes.object.isRequired,
        forceUpdateTab: PropTypes.func
    };

    constructor(props) {
        super(props);

        this._handleCloseButton = this._handleCloseButton.bind(this);
        this._handleCellRef = this._handleCellRef.bind(this);
    }

    componentDidMount() {
        this.sortable = Sortable.create(this.cellRef, {...this.sortableOptions});
    }

    shouldComponentUpdate() {
        return false;
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
        onSort: this._handleSort.bind(this)
    };

    _handleSort({to}) {
        const {actions, mediaQuery} = this.props;

        actions.save({
            to: [to.dataset.id],
            children: [...to.children].map(item => item.dataset.id),
            mediaQuery
        });
    }

    _handleCloseButton(item) {
        this.props.actions.remove({item, from: this.sortable.el.dataset.id, mediaQuery: this.props.mediaQuery});
        this.props.forceUpdateTab();
    }

    _handleCellRef(cellRef) {
        this.cellRef = cellRef;
    }

    render() {
        const {name, mediaQuery} = this.props;
        const items = this.props.globalState[mediaQuery];

        const itemsHTML = items[name] ? items[name].map((item, key) => (
            <li key={key} data-id={item}><span>{item}</span>
                <CloseButtonView cellName={name}
                                 item={item}
                                 onClick={this._handleCloseButton}
                                 mediaQuery={mediaQuery}
                />
            </li>)
        ) : '';

        return (<ul ref={this._handleCellRef} data-id={name}> {itemsHTML} </ul>);
    }
}
