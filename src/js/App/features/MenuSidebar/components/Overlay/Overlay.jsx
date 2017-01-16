import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'uuid';
import {Modal} from 'App/components';

import styles from './Overlay.scss';
import * as actions from 'App/store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
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
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {this.returnMenuContent()}
            </ReactCSSTransitionGroup>
        );
    }
}

Overlay.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(Overlay);
