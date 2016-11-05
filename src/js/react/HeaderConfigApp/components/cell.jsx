import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'sortablejs';

import CloseButton from './closeButton.jsx';
import styles from 'HeaderConfigApp/styles/modal.scss';

// Functional Component
class Cell extends React.Component {

    sortable = null; // sortable instance

    sortableOptions = {
        group: {name: 'headerConfig'},
        animation: 150,
        ghostClass: styles.sortableGhost,
        onEnd: this.props.onEnd,
        onMove: this.props.onMove
    };

    constructor(props) {
        super(props);

        const {items, name, onClick} = props;

        this.itemsHTML = items[name] ? items[name].map((item, key) => (
            <li key={key} data-id={item}>{item} <CloseButton item={item} onClick={onClick}/></li>)
        ) : '';
    }

    componentDidMount() {
        this.sortable = Sortable.create(ReactDOM.findDOMNode(this), {...this.sortableOptions});
    }

    componentWillUnmount() {
        if (this.sortable) {
            this.sortable.destroy();
            this.sortable = null;
        }
    }

    render() {
        return (
            <ul className={this.props.name}> {this.itemsHTML} </ul>
        );
    }
}

Cell.propTypes = {
    items: React.PropTypes.object,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Cell;
