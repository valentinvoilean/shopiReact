import React, {PropTypes} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import {TabView} from 'HeaderConfigApp/components';
import styles from './modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

const ModalView = ({headerConfig, actions}) => {
    /* eslint-disable react/forbid-component-props  */
    return (
        <div className={styles.background}>
            <div className={`container ${styles.base}`}>
                <h1 className={styles.h1}>Header Configuration</h1>
                <Tabs className={styles.tabs}>
                    <TabList>
                        {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                    </TabList>
                    { mediaQueries.map((mq) => (
                        <TabPanel key={uuid.v4()}>
                            <TabView mediaQuery={mq} headerConfig={headerConfig} actions={actions} />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
    /* eslint-enable */
};

ModalView.propTypes = {
    headerConfig: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ModalView;
