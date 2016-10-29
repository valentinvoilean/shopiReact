import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {HeaderTab} from 'react-header-configurator/components';
import styles from './HeaderWrapper.scss';

export default ({headerConfig, saveHeaderSettings, loadHeaderSettings}) => {

    const containerClasses = `container ${styles.base}`;

    return (
        <div className={styles.background}>
            <div className={containerClasses}>
                <Tabs className={styles.tabs}>
                    <TabList>
                        <Tab>Mobile</Tab>
                        <Tab>Tablet</Tab>
                        <Tab>Desktop</Tab>
                    </TabList>
                    <TabPanel>
                        <HeaderTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={saveHeaderSettings}
                            loadHeaderSettings={loadHeaderSettings}
                            filter="mobile">
                            Mobile Header Configuration
                        </HeaderTab>
                    </TabPanel>

                    <TabPanel>
                        <HeaderTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={saveHeaderSettings}
                            loadHeaderSettings={loadHeaderSettings}
                            filter="tablet">
                            Tablet Header Configuration
                        </HeaderTab>
                    </TabPanel>

                    <TabPanel>
                        <HeaderTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={saveHeaderSettings}
                            loadHeaderSettings={loadHeaderSettings}
                            filter="desktop">
                            Desktop Header Configuration
                        </HeaderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

