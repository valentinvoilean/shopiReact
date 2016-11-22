import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import {TabContainer} from 'HeaderConfigApp/components';
import styles from './modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

const ModalView = () => (
    <div className={styles.background}>
        <div className={`container ${styles.base}`}>
            <h1 className={styles.h1}>Header Configuration</h1>
            {/* eslint-disable react/forbid-component-props  */}
            <Tabs className={styles.tabs}>
                <TabList>
                    {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                </TabList>
                { mediaQueries.map((mq) => (
                    <TabPanel key={uuid.v4()}>
                        <TabContainer mediaQuery={mq} />
                    </TabPanel>
                ))}
            </Tabs>
            {/* eslint-enable */}
        </div>
    </div>
);

export default ModalView;
