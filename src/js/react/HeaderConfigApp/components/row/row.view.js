import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {CellContainer} from 'HeaderConfigApp/components';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const RowView = props => {
    const {mediaQuery, currentPosition, forceUpdate} = props;
    const multiCells = mediaQuery !== 'mobile' || currentPosition === 0;

    if (multiCells) {
        return (
            <div className={styles.headerArea}>
                {
                    horizontalPositions.map(
                        (pos) => (
                            <CellContainer key={uuid.v4()}
                                           name={`${verticalPositions[currentPosition]}${pos}`}
                                           mediaQuery={mediaQuery}
                                           forceUpdateTab={forceUpdate}
                            />
                        )
                    )
                }
            </div>
        );
    }

    return (
        <div className={styles.headerArea}>
            <CellContainer key={uuid.v4()}
                           name={verticalPositions[currentPosition]}
                           mediaQuery={mediaQuery}
                           forceUpdateTab={forceUpdate}
            />
        </div>
    );
};

RowView.propTypes = {
    mediaQuery: PropTypes.string.isRequired,
    currentPosition: PropTypes.number,
    forceUpdate: PropTypes.func.isRequired
};

export default RowView;
