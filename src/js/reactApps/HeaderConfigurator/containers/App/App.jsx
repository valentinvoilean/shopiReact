import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {HeaderTab} from 'react-header-configurator/components';
import styles from './App.scss';
import {loadHeaderSettings, saveHeaderSettings} from 'react-header-configurator/redux/modules/headerConfig';

export const App = ({actions, headerConfig}) => {
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

App.propTypes = {
    actions: PropTypes.object.isRequired,
    headerConfig: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        headerConfig: state.headerConfig
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({loadHeaderSettings, saveHeaderSettings}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
