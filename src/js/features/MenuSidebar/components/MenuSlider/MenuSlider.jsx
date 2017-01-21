import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import styles from './MenuSlider.scss';
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
    position: 'Left',
    deactivateMenu: () => {}
};

export class MenuSlider extends Component {

    constructor(props) {
        super(props);

        this.handleMenuState = this.handleMenuState.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        //this.props.deactivateMenu();
    }

    handleMenuState(state) {
        if (!state.isOpen) {
            this.props.deactivateMenu();
        }
    }

    render() {
        const {effect, position, active} = this.props;
        const transitionName = effect.split('-')[1];
        const sliderClasses = classNames(styles.slider, styles[`slider${position}`]);

        return (
            <div className={sliderClasses} transitionName={transitionName} position={position} active={active}>
                <ul className={styles.menu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

MenuSlider.propTypes = propTypes;
MenuSlider.defaultProps = defaultProps;

export default connect(
    state => ({...state.mainMenu.toJS().sidebar}),
    dispatch => ({...bindActionCreators(actions, dispatch)})
)(MenuSlider);
