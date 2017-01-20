import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'uuid';
import {Modal} from 'components';

import styles from './Overlay.scss';
import * as actions from 'store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const defaultProps = {
    mainMenuState: {getIn: () => {}},
    actions: {}
};

export class Overlay extends Component {

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        this.props.actions.deactivateMenu();
    }

    returnMenuContent() {
        if (!this.props.mainMenuState.getIn(['sidebar', 'active'])) {
            return null;
        }

        return (
            <Modal isOpen isLight key={uuid.v4()}>
                <ul className={styles.menu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </Modal>
        );
    }

    render() {
        const transitionName = this.props.mainMenuState.getIn(['sidebar', 'effect']).split('-')[1];

        return (
            <ReactCSSTransitionGroup
                transitionName={transitionName}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {this.returnMenuContent()}
            </ReactCSSTransitionGroup>
        );
    }
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(Overlay);