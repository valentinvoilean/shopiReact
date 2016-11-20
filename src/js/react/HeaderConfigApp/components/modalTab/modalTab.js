import React from 'react';

import {Row, Cell, GeneratedCode} from 'HeaderConfigApp/components';

import styles from 'HeaderConfigApp/styles/modal.scss';

const ModalTab = props => {
    const {mediaQuery, headerConfig, actions} = props;

    return (
        <div>
            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}>
                    <Cell name='Hidden' items={headerConfig[mediaQuery]} mediaQuery={mediaQuery} actions={actions} />
                </div>
            </div>

            <div className="col-md-6">
                <h2 className={styles.h2}>3. Generated code to be copied</h2>
                <div className={styles.codeContainer}>
                    <GeneratedCode text={JSON.stringify(headerConfig)} />
                </div>
            </div>

            <div className={styles.container}>
                <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                    boxes.</p>

                <div className={styles.header + ' ' + styles[mediaQuery]}>
                    <Row tabProps={props} currentPosition={0} />
                    <Row tabProps={props} currentPosition={1} />
                    <Row tabProps={props} currentPosition={2} />
                </div>
            </div>
        </div>
    );
};

ModalTab.propTypes = {
    mediaQuery: React.PropTypes.string.isRequired,
    headerConfig: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

export default ModalTab;
