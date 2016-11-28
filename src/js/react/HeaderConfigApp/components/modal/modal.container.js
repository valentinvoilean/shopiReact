import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import * as actions from 'HeaderConfigApp/redux/modules/modal';

import {TabContainer} from 'HeaderConfigApp/components';
import styles from './modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

import {getInitialState} from 'HeaderConfigApp/utils/modalUtil';

function mapStateToProps(state) {
    return {
        globalState: state.headerConfig
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

class ModalContainer extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        globalState: PropTypes.object.isRequired
    };

    state = getInitialState();

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {globalState, actions} = this.props;

        return (
            <div className={styles.background}>
                <div className={`container ${styles.base}`}>
                    <h1 className={styles.h1}>Header Configuration</h1>
                    {/* eslint-disable react/forbid-component-props  */}
                    <Tabs className={styles.tabs}>
                        <TabList>
                            {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                        </TabList>
                        { mediaQueries.map((mq) => (
                            <TabPanel key={uuid.v4()}>
                                <TabContainer
                                    mediaQuery={mq}
                                    items={globalState[mq]}
                                    globalState={globalState}
                                    updateGlobalState={actions.save}
                                />
                            </TabPanel>
                        ))}
                    </Tabs>
                    {/* eslint-enable */}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);
