import React from 'react';
import uuid from 'uuid';

import Cell from 'HeaderConfigApp/containers/cell.jsx';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const TabComponent = props => {
    const {mediaQuery, headerConfig, actions} = props;

    const getCells = (curPos) => {
        if (curPos === void 0) {
            return (
                <Cell name="Hidden"
                      items={headerConfig[mediaQuery]}
                      mediaQuery={mediaQuery}
                      actions={actions}/>
            );
        }

        return horizontalPositions.map(
            (pos) => (
                <Cell key={uuid.v4()}
                      name={`${verticalPositions[curPos]}${pos}`}
                      items={headerConfig[mediaQuery]}
                      mediaQuery={mediaQuery}
                      actions={actions}/>
            )
        );
    };

    return (
        <div>
            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}> {getCells()} </div>
            </div>

            <div className="col-md-6">
                <h2 className={styles.h2}>3. Generated code to be copied</h2>
                <div className={styles.codeContainer}>
                    <code className={styles.code}>{JSON.stringify(headerConfig)}</code>
                    <div className={styles.copy}>Click to copy</div>
                </div>
            </div>

            <div className={styles.container}>
                <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                    boxes.</p>

                <div className={styles.header}>
                { mediaQuery !== 'mobile' ? <div className={styles.headerArea}> { getCells(0) } </div> : ''}
                    <div className={styles.headerArea}> { getCells(1) } </div>
                    <div className={styles.headerArea}> { getCells(2) } </div>
                </div>
            </div>
        </div>
    );
};

TabComponent.propTypes = {
    mediaQuery: React.PropTypes.string,
    headerConfig: React.PropTypes.object,
    actions: React.PropTypes.object,
    items: React.PropTypes.object
};

export default TabComponent;
