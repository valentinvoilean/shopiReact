import React from 'react';
import ReactDOM from 'react-dom';
import {includes} from 'lodash';

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

    onItemDropped({to, from}) {
        const {actions, mediaQuery} = this.props;

        actions.save({
            [mediaQuery]: {
                [to.className]: [...to.children].map(item => item.dataset.id),
                [from.className]: [...from.children].map(item => item.dataset.id)
            }
        });
    }

    onMove({to, dragged}) {
        const newList = [...to.children].map((item) => item.dataset.id);
        const draggedItem = dragged.dataset.id;

        if (draggedItem === 'Logo' && newList.length > 0) {
            return false;
        }

        return !includes(newList, 'Logo');
    }

    onClickCloseButton(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.className
        });
    }

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        el.addEventListener('dragover', () => this.setState({hoverClass: ` ${styles.cellValid}`}));
        el.addEventListener('dragleave', () => this.setState({hoverClass: ''}));
        el.addEventListener('drop', () => this.setState({hoverClass: ''}));
    }


    render() {
        return (
            <Cell items={this.props.items}
                  name={this.props.name + this.state.hoverClass}
                  onClick={this.onClickCloseButton.bind(this)}
                  onMove={this.onMove.bind(this)}
                  onEnd={this.onItemDropped.bind(this)}/>
        );
    }
}

export default CellContainer;
