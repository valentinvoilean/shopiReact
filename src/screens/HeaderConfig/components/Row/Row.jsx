import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {Cell} from 'screens/HeaderConfig/components';
import {horizontalPositions, verticalPositions} from './constants/positions';
import styles from './Row.scss';

export default class Row extends React.PureComponent {
    static propTypes = {
        mediaQuery: PropTypes.string.isRequired,
        pos: PropTypes.number,
    };

    static defaultProps = {
        pos: 0,
    };

    render() {
        const {mediaQuery, pos} = this.props;
        const multiCells = mediaQuery !== 'mobile' || pos === 0;

        if (multiCells) {
            return (
                <div className={styles.headerArea}>
                    {
                        horizontalPositions.map(
                            (hPos) => (
                                <Cell key={uuid.v4()}
                                      {...this.props}
                                      name={`${verticalPositions[pos]}${hPos}`}
                                      mediaQuery={mediaQuery}
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
                      {...this.props}
                      name={verticalPositions[pos]}
                      mediaQuery={mediaQuery}
                />
            </div>
        );
    }
}
