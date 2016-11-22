import React, {Component, PropTypes} from 'react';

import CellView from './cell.view';

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

        this._handleCellRef = this._handleCellRef.bind(this);
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

    _handleCellRef(cellRef) {
        this.cellRef = cellRef;
    }

    render() {
        const {items, name, mediaQuery} = this.props;

        return (
            <CellView cellRef={this._handleCellRef}
                      items={items}
                      name={name}
                      onClickCloseButton={this._handleCloseButton}
                      mediaQuery={mediaQuery}
            />
        );
    }
}

export default CellContainer;
