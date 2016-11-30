import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {Cell} from 'HeaderConfigApp/components';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from './row.scss';

const Row = props => {
    const {mediaQuery, globalState, pos, actions} = props;
    const items = globalState.data[mediaQuery];
    const multiCells = mediaQuery !== 'mobile' || pos === 0;

    if (multiCells) {
        return (
            <div className={styles.headerArea}>
                {
                    horizontalPositions.map(
                        (hPos) => (
                            <Cell key={uuid.v4()}
                                  name={`${verticalPositions[pos]}${hPos}`}
                                  items={items}
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
            <Cell key={uuid.v4()}
                  name={verticalPositions[pos]}
                  items={items}
                  mediaQuery={mediaQuery}
                  actions={actions}
            />
        </div>
    );
};

Row.propTypes = {
    globalState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    pos: PropTypes.number
};

export default Row;
