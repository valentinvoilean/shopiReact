import React from 'react';

import ModalCell from './modal-cell.component.jsx';
import styles from './modal.scss';

export default (props) => {
    const {save, remove, headerConfig, mediaQuery} = props;

    const items = headerConfig[mediaQuery];

    const getCells = (curPos) => {
        const horizontalPositions = ['Left', 'Center', 'Right'];

        return horizontalPositions.map(
            (pos) => (
                <ModalCell key={`${curPos}${pos}`} name={`${curPos}${pos}`}
                           save={save} remove={remove} mediaQuery={mediaQuery} items={items}/>
            )
        );
    };

    const showTopCells = () => {
        if (mediaQuery !== 'mobile') {
            return (
                <div className={styles.headerArea}>
                    { getCells('Top') }
                </div>
            );
        }
    };

    return (
        <div>
            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <ModalCell save={save} remove={remove} mediaQuery={mediaQuery} name="Hidden" items={items}/>
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
                    <div className={styles.headerArea}> { getCells('Main') } </div>
                    <div className={styles.headerArea}> { getCells('Bottom') } </div>
                </div>
            </div>
        </div>
    );
};
