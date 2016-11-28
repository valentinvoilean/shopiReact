import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import {TabContainer} from 'HeaderConfigApp/components';
import styles from './modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

import {getInitialState} from 'HeaderConfigApp/utils/modalUtil';

export default class ModalContainer extends React.Component {

    constructor(props) {
        super(props);

        this._updateGlobalState = this._updateGlobalState.bind(this);
    }

    state = getInitialState();

    shouldComponentUpdate() {
        return true;
    }

    _updateGlobalState(newState, mediaQuery) {
        this.setState({
            [mediaQuery]: newState
        });
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
                        { mediaQueries.map((mq) => (
                            <TabPanel key={uuid.v4()}>
                                <TabContainer
                                    mediaQuery={mq}
                                    items={this.state[mq]}
                                    globalState={this.state}
                                    updateGlobalState={this._updateGlobalState}
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
