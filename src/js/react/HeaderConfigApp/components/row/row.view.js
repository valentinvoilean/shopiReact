import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {CellContainer} from 'HeaderConfigApp/components';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const RowView = props => {
    const {mediaQuery, items, currentPosition, save} = props;
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
                                           save={save}
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
                           save={save}
            />
        </div>
    );
};

RowView.propTypes = {
    items: PropTypes.object.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    currentPosition: PropTypes.number,
    save: PropTypes.func.isRequired
};

export default RowView;
