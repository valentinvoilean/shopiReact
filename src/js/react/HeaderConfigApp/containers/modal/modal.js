import React, {Component, PropTypes} from 'react';
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import * as actions from 'HeaderConfigApp/actions/modalActions';

import {ModalTab} from 'HeaderConfigApp/components';
import styles from 'HeaderConfigApp/styles/modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

class Modal extends Component {
    static propTypes = {
        headerConfig: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    };

    render() {
        const {headerConfig, actions, store} = this.props;

        return (
            <Provider store={ store }>
                <div className={styles.background}>
                    <div className={`container ${styles.base}`}>
                        <h1 className={styles.h1}>Header Configuration</h1>
                        <Tabs className={styles.tabs}>
                            <TabList>
                                {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                            </TabList>
                            { mediaQueries.map((mq) => (
                                <TabPanel key={uuid.v4()}>
                                    <ModalTab mediaQuery={mq} headerConfig={headerConfig} actions={actions}/>
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </Provider>
        );
    }
}

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
)(Modal);
