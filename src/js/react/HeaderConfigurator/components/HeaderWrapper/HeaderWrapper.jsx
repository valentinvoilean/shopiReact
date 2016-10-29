import React from 'react';
import styles from './HeaderWrapper.scss';
import CSSModules from 'react-css-modules';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import HeaderTab from 'react-header-configurator/components';

const HeaderWrapper = ({headerConfig, saveHeaderSettings, loadHeaderSettings}) => {

    return (
        <div styleName='background'>
            <div className='container' styleName='base'>
                <Tabs styleName="tabs">
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

export default CSSModules(HeaderWrapper, styles, {allowMultiple: true});
