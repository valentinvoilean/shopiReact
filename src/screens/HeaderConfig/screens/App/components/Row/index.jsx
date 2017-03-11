import React, {PropTypes} from 'react';
import uuid from 'uuid';
import {Cell} from 'screens/HeaderConfig/screens/App/components';
import {horizontalPositions, verticalPositions} from 'screens/HeaderConfig/constants/positions';
import styles from './styles.scss';

export default class Row extends React.PureComponent {
    static propTypes = {
        globalState: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        mediaQuery: PropTypes.string.isRequired,
        pos: PropTypes.number,
    };

    static defaultProps = {
        pos: 0,
    };

    render() {
        const {mediaQuery, globalState, pos, actions} = this.props;
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
}
