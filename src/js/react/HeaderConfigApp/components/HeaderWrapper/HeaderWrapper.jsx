import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {HeaderTab} from 'HeaderConfigApp/components';
import styles from './HeaderWrapper.scss';

export default ({actions, headerConfig}) => {

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
                            saveHeaderSettings={actions.saveHeaderSettings}
                            loadHeaderSettings={actions.loadHeaderSettings}
                            mediaQuery="mobile">
                            Mobile Header Configuration
                        </HeaderTab>
                    </TabPanel>

                    <TabPanel>
                        <HeaderTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={actions.saveHeaderSettings}
                            loadHeaderSettings={actions.loadHeaderSettings}
                            mediaQuery="tablet">
                            Tablet Header Configuration
                        </HeaderTab>
                    </TabPanel>

                    <TabPanel>
                        <HeaderTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={actions.saveHeaderSettings}
                            loadHeaderSettings={actions.loadHeaderSettings}
                            mediaQuery="desktop">
                            Desktop Header Configuration
                        </HeaderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

