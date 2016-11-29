import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import * as actions from 'HeaderConfigApp/redux/modules/modal';

import {TabContainer} from 'HeaderConfigApp/components';
import styles from './modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

@connect(
    state => ({globalState: state.headerConfig}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)
export default class ModalContainer extends React.Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {

        return (
            <div className={styles.background}>
                <div className={`container ${styles.base}`}>
                    <h1 className={styles.h1}>Header Configuration</h1>
                    {/* eslint-disable react/forbid-component-props  */}
                    <Tabs className={styles.tabs}>
                        <TabList>
                            {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                        </TabList>
                        { mediaQueries.map((mediaQuery) => (
                            <TabPanel key={uuid.v4()}>
                                <TabContainer {...this.props} mediaQuery={mediaQuery} />
                            </TabPanel>
                        ))}
                    </Tabs>
                    {/* eslint-enable */}
                </div>
            </div>
        );
    }
}

