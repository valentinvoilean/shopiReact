import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import uuid from 'uuid';

import {TabContainer} from 'HeaderConfigApp/components';
import styles from './modal.scss';
import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

import {getInitialState} from 'HeaderConfigApp/utils/modalUtil';

export default class ModalContainer extends React.Component {

    state = getInitialState();

    shouldComponentUpdate() {
        return false;
    }

    render() {
        /* eslint-disable react/forbid-component-props  */
        return (
            <div className={styles.background}>
                <div className={`container ${styles.base}`}>
                    <h1 className={styles.h1}>Header Configuration</h1>
                    <Tabs className={styles.tabs}>
                        <TabList>
                            {mediaQueries.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                        </TabList>
                        { mediaQueries.map((mq) => (
                            <TabPanel key={uuid.v4()}>
                                <TabContainer mediaQuery={mq} items={this.state[mq]} globalState={this.state} />
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        );
        /* eslint-enable */
    }
}
