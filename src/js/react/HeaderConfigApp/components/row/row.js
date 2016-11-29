import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {Cell} from 'HeaderConfigApp/components';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const Row = props => {
    const {mediaQuery, items, currentPosition, save, remove} = props;
    const multiCells = mediaQuery !== 'mobile' || currentPosition === 0;

    if (multiCells) {
        return (
            <div className={styles.headerArea}>
                {
                    horizontalPositions.map(
                        (pos) => (
                            <Cell key={uuid.v4()}
                                  name={`${verticalPositions[currentPosition]}${pos}`}
                                  items={items}
                                  mediaQuery={mediaQuery}
                                  save={save}
                                  remove={remove}
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
                  name={verticalPositions[currentPosition]}
                  items={items}
                  mediaQuery={mediaQuery}
                  save={save}
                  remove={remove}
            />
        </div>
    );
};

Row.propTypes = {
    items: PropTypes.object.isRequired,
    mediaQuery: PropTypes.string.isRequired,
    currentPosition: PropTypes.number,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default Row;
