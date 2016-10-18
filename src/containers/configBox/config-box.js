import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';
import CSSModules from 'react-css-modules';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

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
                            <div className="col-md-6">
                                <h2 styleName='h2'>1. Available components to drag & drop</h2>
                            </div>
                            <div className="col-md-6">
                                <h2 styleName='h2'>3. Generated code to be copied</h2>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <h1 styleName='h1'>Tablet Header Configuration</h1>
                            <div className="col-md-6">
                                <h2 styleName='h2'>1. Available components to drag & drop</h2>
                            </div>
                            <div className="col-md-6">
                                <h2 styleName='h2'>3. Generated code to be copied</h2>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <h1 styleName='h1'>Desktop Header Configuration</h1>

                            <div className="col-md-6">
                                <h2 styleName='h2'>1. Available components to drag & drop</h2>
                            </div>
                            <div className="col-md-6">
                                <h2 styleName='h2'>3. Generated code to be copied</h2>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default CSSModules(ConfigBox, styles, {allowMultiple: true});
