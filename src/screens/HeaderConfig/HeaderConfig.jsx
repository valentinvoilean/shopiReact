import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Modal} from 'shared/components';
import uuid from 'uuid';
import classNames from 'classnames';

import {Row, CodeBox, Cell} from './components';

import 'react-tabs/style/react-tabs.css';
import styles from './HeaderConfig.scss';

import {mediaQueryNames} from 'shared/constants/mediaQueries';
import * as actions from './HeaderConfig.duck';

@connect(
    state => ({...state.headerConfig.toJS()}),
    dispatch => ({...bindActionCreators(actions, dispatch)})
)
export default class HeaderConfig extends Component {
    static propTypes = {
        // Store Props
        data: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.modalClasses = classNames('container', styles.base);

    }

    shouldComponentUpdate(nextProps) {
        return nextProps.shouldComponentUpdate;
    }

    render() {
        return (
            <Modal isOpen className={this.modalClasses}>
                <h1 className={styles.h1}>Header Configuration</h1>
                <Tabs className={styles.tabs}>
                    <TabList>
                        {mediaQueryNames.map((mediaQuery) => (<Tab key={uuid.v4()}>{mediaQuery}</Tab>))}
                    </TabList>
                    { mediaQueryNames.map((mediaQuery) => (
                        <TabPanel key={uuid.v4()}>
                            <div className="col-sm-6">
                                <h2 className={styles.h2}>1. Available components to drag & drop</h2>
                                <div className={styles.componentsContainer}>
                                    <Cell key={uuid.v4()}
                                          {...this.props}
                                          name="Hidden"
                                          mediaQuery={mediaQuery}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <h2 className={styles.h2}>3. Generated code to be copied</h2>
                                <CodeBox text={JSON.stringify(this.props.data)} />
                            </div>

                            <div className={styles.container}>
                                <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                                <p> Drag & drop the components into the next boxes. You can also sort them once they
                                    are inside the
                                    boxes.</p>

                                <div data-mq={mediaQuery} className={styles.header}>
                                    {[0, 1, 2].map(pos =>
                                        <Row key={`row${pos}`} {...this.props} pos={pos} mediaQuery={mediaQuery} />)
                                    }
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </Modal>
        );
    }
}
