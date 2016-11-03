import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import ModalTab from './modal-tab.component.jsx';
import styles from './modal.scss';
import * as actions from './modal.duck';

export const ModalComponent = ({actions, headerConfig}) => {
    const containerClasses = `container ${styles.base}`;
    const mediaQueries = ['mobile', 'tablet', 'desktop'];

    return (
        <div className={styles.background}>
            <div className={containerClasses}>
                <h1 className={styles.h1}>Header Configuration</h1>
                <Tabs className={styles.tabs}>
                    <TabList>
                        {mediaQueries.map((mediaQuery) => (<Tab key={mediaQuery}>{mediaQuery}</Tab>))}
                    </TabList>
                    { mediaQueries.map((mediaQuery) => (
                        <TabPanel key={mediaQuery}>
                            <ModalTab headerConfig={headerConfig} mediaQuery={mediaQuery}
                                      save={actions.save} remove={actions.remove}>
                            </ModalTab>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

ModalComponent.propTypes = {
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
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalComponent);
