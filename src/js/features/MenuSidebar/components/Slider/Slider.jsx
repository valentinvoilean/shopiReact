import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'uuid';
import classNames from 'classnames';

import styles from './Slider.scss';
import * as actions from 'store/modules/MainMenu';

const propTypes = {
    effect: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    deactivateMenu: PropTypes.func.isRequired
};

const defaultProps = {
    effect: 'simple',
    active: false,
    position: 'left',
    deactivateMenu: () => {}
};

export class Overlay extends Component {

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        this.props.deactivateMenu();
    }

    returnMenuContent() {
        if (!this.props.active) {
            return null;
        }

        const menuClasses = classNames(styles.slider, {
            [`${styles.sliderRightSide}`] : this.props.position === 'right'
        });

        return (
            <div className={menuClasses} key={uuid.v4()}>
                <ul className={styles.menu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }

    render() {
        const {effect, position} = this.props;

        let transitionName = `${effect.split('-')[1]}--${position}`;

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
    state => ({...state.mainMenu.toJS().sidebar}),
    dispatch => ({...bindActionCreators(actions, dispatch)})
)(Overlay);
