import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import ModalTab from './modal-tab.component.jsx';
import styles from './modal.component.scss';

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
                        <ModalTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={actions.saveHeaderSettings}
                            loadHeaderSettings={actions.loadHeaderSettings}
                            mediaQuery="mobile">
                            Mobile Header Configuration
                        </ModalTab>
                    </TabPanel>

                    <TabPanel>
                        <ModalTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={actions.saveHeaderSettings}
                            loadHeaderSettings={actions.loadHeaderSettings}
                            mediaQuery="tablet">
                            Tablet Header Configuration
                        </ModalTab>
                    </TabPanel>

                    <TabPanel>
                        <ModalTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={actions.saveHeaderSettings}
                            loadHeaderSettings={actions.loadHeaderSettings}
                            mediaQuery="desktop">
                            Desktop Header Configuration
                        </ModalTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

