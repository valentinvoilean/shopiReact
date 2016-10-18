import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ConfigBox extends React.Component {
    render() {
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
                            <h1 styleName='h1'>Mobile Header Configuration</h1>
                        </TabPanel>

                        <TabPanel>
                            <h1 styleName='h1'>Tablet Header Configuration</h1>
                        </TabPanel>

                        <TabPanel>
                            <h1 styleName='h1'>Desktop Header Configuration</h1>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default CSSModules(ConfigBox, styles, {allowMultiple: true});
