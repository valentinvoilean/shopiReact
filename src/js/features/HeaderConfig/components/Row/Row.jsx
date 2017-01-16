import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {Cell} from 'features/HeaderConfig/components';
import {horizontalPositions, verticalPositions} from 'features/HeaderConfig/constants/positions';
import styles from './Row.scss';

const propTypes = {
    globalState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    pos: PropTypes.number
};

const defaultProps = {
    globalState: {},
    actions: {},
    mediaQuery: '',
    pos: 0
};

function Row(props) {
    const {mediaQuery, globalState, pos, actions} = props;
    const multiCells = mediaQuery !== 'mobile' || pos === 0;

    if (multiCells) {
        return (
            <div className={styles.headerArea}>
                {
                    horizontalPositions.map(
                        (hPos) => (
                            <Cell key={uuid.v4()}
                                  name={`${verticalPositions[pos]}${hPos}`}
                                  globalState={globalState}
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
                  globalState={globalState}
                  mediaQuery={mediaQuery}
                  actions={actions}
            />
        </div>
    );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
