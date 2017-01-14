import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Modal from 'react-modal';
import uuid from 'uuid';
import classNames from 'classnames';

import {mediaQueryNames} from 'common/constants/mediaQueries';

import {Row, Cell, CodeBox} from 'App/features/HeaderConfig/components';
import styles from './HeaderConfig.scss';

import * as actions from 'App/store/modules/HeaderConfig';

const propTypes = {
    globalState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const defaultProps = {
    globalState: {},
    actions: {}
};

export class HeaderConfigPureModal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.globalState.get('shouldComponentUpdate');
    }

    render() {
        const {globalState} = this.props;
        const modalClasses = classNames('container', styles.base);
        const modalStyles = {overlay: {backgroundColor: 'rgba(0, 0, 0, 0.7)' }};

        return (
            <Modal isOpen
                   className={modalClasses}
                   style={modalStyles}
                   contentLabel="Modal"
            >
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
                                          name="Hidden"
                                          globalState={globalState}
                                          mediaQuery={mediaQuery}
                                          actions={this.props.actions}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <h2 className={styles.h2}>3. Generated code to be copied</h2>
                                <CodeBox text={JSON.stringify(globalState.get('data'))} />
                            </div>

                            <div className={styles.container}>
                                <h2 className={styles.h2}>2. Header - Drag & drop components in these boxes</h2>

                                <p> Drag & drop the components into the next boxes. You can also sort them once they
                                    are inside the
                                    boxes.</p>

                                <div data-mq={mediaQuery} className={styles.header}>
                                    <Row {...this.props} pos={0} mediaQuery={mediaQuery} />
                                    <Row {...this.props} pos={1} mediaQuery={mediaQuery} />
                                    <Row {...this.props} pos={2} mediaQuery={mediaQuery} />
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </Modal>
        );
    }
}

HeaderConfigPureModal.propTypes = propTypes;
HeaderConfigPureModal.defaultProps = defaultProps;

export default connect(
    state => ({globalState: state.headerConfig}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(HeaderConfigPureModal);
