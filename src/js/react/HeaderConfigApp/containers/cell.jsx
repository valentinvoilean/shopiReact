import React from 'react';
import ReactDOM from 'react-dom';

import Cell from 'HeaderConfigApp/components/cell.jsx';
import styles from 'HeaderConfigApp/styles/modal.scss';

// Functional Component
class CellContainer extends React.Component {
    static propTypes = {
        items: React.PropTypes.object,
        name: React.PropTypes.string,
        actions: React.PropTypes.object,
        remove: React.PropTypes.func,
        mediaQuery: React.PropTypes.string
    };

    state = {
        hoverClass: ''
    };

    _addHoverClass() {
        this.setState({hoverClass: ` ${styles.cellValid}`});
    }

    _removeHoverClass() {
        this.setState({hoverClass: ''});
    }

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        el.addEventListener('dragover', this._addHoverClass.bind(this));
        el.addEventListener('dragleave', this._removeHoverClass.bind(this));
        el.addEventListener('drop', this._removeHoverClass.bind(this));
    }

    componentWillUnmount() {
        const el = ReactDOM.findDOMNode(this);
        el.removeEventListener('dragover', this._addHoverClass.bind(this));
        el.removeEventListener('dragleave', this._removeHoverClass.bind(this));
        el.removeEventListener('drop', this._removeHoverClass.bind(this));
    }

    render() {
        return (
            <Cell items={this.props.items}
                  name={this.props.name + this.state.hoverClass}
                  actions={this.props.actions}
                  mediaQuery={this.props.mediaQuery}/>
        );
    }
}

export default CellContainer;
