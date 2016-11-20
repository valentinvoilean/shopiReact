import React from 'react';
import uuid from 'uuid';
import {CellContainer} from 'HeaderConfigApp/components';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const RowView = props => {
    const {tabProps, currentPosition} = props;
    const {mediaQuery, headerConfig, actions} = tabProps;
    const multiCells = mediaQuery !== 'mobile' || currentPosition === 0;

    if (multiCells) {
        return (
            <div className={styles.headerArea}>
            {
                horizontalPositions.map(
                    (pos) => (
                        <CellContainer key={uuid.v4()}
                              name={`${verticalPositions[currentPosition]}${pos}`}
                              items={headerConfig[mediaQuery]}
                              mediaQuery={mediaQuery}
                              actions={actions}
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
                  items={headerConfig[mediaQuery]}
                  mediaQuery={mediaQuery}
                  actions={actions}
            />
        </div>
    );
};

RowView.propTypes = {
    tabProps: React.PropTypes.object.isRequired,
    currentPosition: React.PropTypes.number
};

export default RowView;
