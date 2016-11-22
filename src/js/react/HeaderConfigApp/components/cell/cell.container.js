import React, {Component, PropTypes} from 'react';

import CellView from './cell.view';
import {ItemView} from 'HeaderConfigApp/components';

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
    }

    shouldComponentUpdate() {
        return true;
    }

    _handleCloseButton(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.dataset.id
        });
    }

    render() {
        const {items, name, mediaQuery} = this.props;

        const itemsHTML = items[name] ? items[name].map((item, key) => (
            <ItemView key={key} item={item}
                      onClick={this._handleCloseButton}
                      mediaQuery={mediaQuery}
                      name={name}
            />
        )) : '';

        return (<CellView> {itemsHTML} </CellView>);
    }
}

export default CellContainer;
