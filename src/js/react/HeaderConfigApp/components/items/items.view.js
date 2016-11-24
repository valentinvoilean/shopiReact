import React, {PropTypes} from 'react';

import {ItemContainer} from 'HeaderConfigApp/components';
import styles from 'HeaderConfigApp/styles/modal.scss';

const ItemsView = props => {
    const {items, name, mediaQuery, isOver, canDrop, actions, onCloseButton} = props;

    const cellClass = isOver ? canDrop ? styles.cellValid : styles.cellInvalid : canDrop ? styles.cellAvailable : '';

    return (
        <ul className={cellClass}>{
            items[name].map((item, key) => (
                <ItemContainer key={key}
                               index={key}
                               item={item}
                               onClick={onCloseButton}
                               onMove={actions.move}
                               mediaQuery={mediaQuery}
                               name={name}
                />
        ))}
        </ul>
    );
};

ItemsView.propTypes = {
    items: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    onCloseButton: PropTypes.func.isRequired
};

export default ItemsView;
