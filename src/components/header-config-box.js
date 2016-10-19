import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import HeaderConfigTabPanel from 'components/header-config-tab-panel';

const HeaderConfigBox = function() {
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
                        <HeaderConfigTabPanel>
                            Mobile Header Configuration
                        </HeaderConfigTabPanel>
                    </TabPanel>

                    <TabPanel>
                        <HeaderConfigTabPanel>
                            Tablet Header Configuration
                        </HeaderConfigTabPanel>
                    </TabPanel>

                    <TabPanel>
                        <HeaderConfigTabPanel>
                            Desktop Header Configuration
                        </HeaderConfigTabPanel>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CSSModules(HeaderConfigBox, styles, {allowMultiple: true});
