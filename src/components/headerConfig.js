import React from 'react';
import styles from 'styles/modules/config-box.scss';
import CSSModules from 'react-css-modules';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import HeaderConfigTab from 'components/headerConfigTab';

const HeaderConfigBox = ({headerConfig, saveHeaderSettings, loadHeaderSettings}) => {

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
                        <HeaderConfigTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={saveHeaderSettings}
                            loadHeaderSettings={loadHeaderSettings}
                            filter="mobile">
                            Mobile Header Configuration
                        </HeaderConfigTab>
                    </TabPanel>

                    <TabPanel>
                        <HeaderConfigTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={saveHeaderSettings}
                            loadHeaderSettings={loadHeaderSettings}
                            filter="tablet">
                            Tablet Header Configuration
                        </HeaderConfigTab>
                    </TabPanel>

                    <TabPanel>
                        <HeaderConfigTab
                            headerConfig={headerConfig}
                            saveHeaderSettings={saveHeaderSettings}
                            loadHeaderSettings={loadHeaderSettings}
                            filter="desktop">
                            Desktop Header Configuration
                        </HeaderConfigTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CSSModules(HeaderConfigBox, styles, {allowMultiple: true});
