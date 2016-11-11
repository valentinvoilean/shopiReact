import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import uuid from 'uuid';

import TabComponent from 'HeaderConfigApp/components/tab';
import styles from 'HeaderConfigApp/styles/modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

const ModalComponent = ({headerConfig, actions}) => (
    <div className={styles.background}>
        <div className={`container ${styles.base}`}>
            <h1 className={styles.h1}>Header Configuration</h1>
            <Tabs className={styles.tabs}>
                <TabList>
                    {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                </TabList>
                { mediaQueries.map((mq) => (
                    <TabPanel key={uuid.v4()}>
                        <TabComponent mediaQuery={mq} headerConfig={headerConfig} actions={actions}/>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    </div>
);

ModalComponent.propTypes = {
    headerConfig: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

export default ModalComponent;
