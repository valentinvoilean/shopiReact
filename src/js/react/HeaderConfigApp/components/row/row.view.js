import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {CellContainer} from 'HeaderConfigApp/components';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const RowView = props => {
    const {mediaQuery, items, currentPosition} = props;
    const multiCells = mediaQuery !== 'mobile' || currentPosition === 0;

    if (multiCells) {
        return (
            <div className={styles.headerArea}>
            {
                horizontalPositions.map(
                    (pos) => (
                        <CellContainer key={uuid.v4()}
                              name={`${verticalPositions[currentPosition]}${pos}`}
                              items={items}
                              mediaQuery={mediaQuery}
                              //actions={actions}
                        />
                    )
                )
            }
            </div>
        );
    }

    return (
        <div className={styles.headerArea}>
            <CellContainer name={verticalPositions[currentPosition]}
                  items={items}
                  mediaQuery={mediaQuery}
                  //actions={actions}
            />
        </div>
    );
};

RowView.propTypes = {
    items: PropTypes.object.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    currentPosition: PropTypes.number
};

export default RowView;
