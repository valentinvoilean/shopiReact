import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'sortablejs';
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

    sortable = null; // sortable instance

    sortableOptions = {
        group: {name: 'headerConfig'},
        animation: 150,
        ghostClass: styles.sortableGhost,
        onEnd: this.onItemDropped.bind(this),
        onMove({to, dragged}) {
            const newList = [...to.children].map((item) => item.dataset.id);
            const draggedItem = dragged.dataset.id;

            if (draggedItem === 'Logo' && newList.length > 0) {
                return false;
            }

            return !includes(newList, 'Logo');
        }
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

    onClickCloseButton(item) {
        const {items, actions, mediaQuery} = this.props;

        actions.remove({
            items, item, mediaQuery,
            positionLists: this.sortable.el.children,
            position: this.sortable.el.className
        });
    }

    componentDidMount() {
        /*ReactDOM.findDOMNode(this).addEventListener('dragenter', () => {
         this.setState({hoverClass: ' test'});
         });

         ReactDOM.findDOMNode(this).addEventListener('dragleave', () => {
         this.setState({hoverClass: ''});
         });*/

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
            <Cell items={this.props.items} name={this.props.name} onClick={this.onClickCloseButton.bind(this)}/>
        );
    }
}

export default CellContainer;
