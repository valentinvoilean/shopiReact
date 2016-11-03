import React from 'react';

import Cell from './cell.jsx';
import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const TabContent = (props) => {
    const {save, remove, headerConfig, mediaQuery} = props;

    const items = headerConfig[mediaQuery];

    const getCells = (curPos) => {
        return horizontalPositions.map(
            (pos) => (
                <Cell key={`${curPos}${pos}`} name={`${curPos}${pos}`}
                           save={save} remove={remove} mediaQuery={mediaQuery} items={items}/>
            )
        );
    };

    const showTopCells = () => {
        if (mediaQuery !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    { getCells(verticalPositions[0]) }
                </div>
            );
        }
    };

    return (
        <div>
            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <Cell save={save} remove={remove} mediaQuery={mediaQuery} name="Hidden" items={items}/>
                </div>
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
                    { showTopCells() }
                    <div className={styles.headerArea}> { getCells(verticalPositions[1]) } </div>
                    <div className={styles.headerArea}> { getCells(verticalPositions[2]) } </div>
                </div>
            </div>
        </div>
    );
};

TabContent.propTypes = {
    save: React.PropTypes.func,
    remove: React.PropTypes.func,
    headerConfig: React.PropTypes.object,
    mediaQuery: React.PropTypes.string
};

export default TabContent;
