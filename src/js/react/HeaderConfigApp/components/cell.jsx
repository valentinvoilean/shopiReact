import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'sortablejs';
import {includes} from 'lodash';

import styles from 'HeaderConfigApp/styles/modal.scss';

// Functional Component
class Cell extends React.Component {
    static propTypes = {
        items: React.PropTypes.object,
        name: React.PropTypes.string,
        actions: React.PropTypes.object,
        remove: React.PropTypes.func,
        mediaQuery: React.PropTypes.string
    };

    sortable = null; // sortable instance

    constructor(props) {
        super(props);

        const {items, name, actions, mediaQuery} = props;

        this.sortableOptions = {
            group: {name: 'headerConfig'},
            animation: 150,
            ghostClass: styles.sortableGhost,
            onEnd({to, from}) {
                actions.save({
                    [mediaQuery]: {
                        [to.className]: [...to.children].map(item => item.dataset.id),
                        [from.className]: [...from.children].map(item => item.dataset.id)
                    }
                });
            },
            onMove({to, dragged}) {
                const newList = [...to.children].map((item) => item.dataset.id);
                const draggedItem = dragged.dataset.id;

                if (draggedItem === 'Logo' && newList.length > 0) {
                    return false;
                }

                return !includes(newList, 'Logo');
            }
        };

        this.itemsHTML = items[name]
            ? items[name].map((item, key) => (
            <li key={key} data-id={item}>{item} <span className={styles.close} onClick={() => actions.remove({
                items, item, mediaQuery,
                positionLists: sortable.el.children,
                position: sortable.el.className
            })}>&#10005;</span></li>)
        ) : '';

        this.state = {
            hoverClass: ''
        };
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
            <ul className={this.props.name}> {this.itemsHTML} </ul>
        );
    }
}

export default Cell;
