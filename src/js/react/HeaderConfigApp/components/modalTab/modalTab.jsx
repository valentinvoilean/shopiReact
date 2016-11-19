import React from 'react';
import uuid from 'uuid';

import {Cell, GeneratedCode} from 'HeaderConfigApp/components';

import {horizontalPositions, verticalPositions} from 'HeaderConfigApp/constants/positions';
import styles from 'HeaderConfigApp/styles/modal.scss';

const ModalTab = props => {
    const {mediaQuery, headerConfig, actions} = props;

    const _getCells = (curPos) => {
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

    const _getCell = (curPos) => {
        return (
            <Cell name={curPos === void 0 ? 'Hidden' : `${verticalPositions[curPos]}`}
                  items={headerConfig[mediaQuery]}
                  mediaQuery={mediaQuery}
                  actions={actions}/>
        );

    };

    const _onCopy = () => {
      console.log('on Copy');
    };

    return (
        <div>
            <div className="col-md-6">
                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                <div className={styles.componentsContainer}> {_getCell()} </div>
            </div>

            <div className="col-md-6">
                <h2 className={styles.h2}>3. Generated code to be copied</h2>
                <div className={styles.codeContainer}>
                    <GeneratedCode text={JSON.stringify(headerConfig)} onCopy={_onCopy}/>
                </div>
            </div>

            <div className={styles.container}>
                <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                <p> Drag & drop the components into the next boxes. You can also sort them once they are inside the
                    boxes.</p>

                <div className={styles.header + ' ' + styles[mediaQuery]}>
                    <div className={styles.headerArea}>{_getCells(0)}</div>
                    <div className={styles.headerArea}>{mediaQuery !== 'mobile' ? _getCells(1) : _getCell(1)}</div>
                    <div className={styles.headerArea}>{mediaQuery !== 'mobile' ? _getCells(2) : _getCell(2)}</div>
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
