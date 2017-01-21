import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import elementClass from 'element-class';

import styles from './MenuSlider.scss';
import * as actions from 'store/modules/MainMenu';


const propTypes = {
    active: PropTypes.bool.isRequired,
    effect: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    deactivateMenu: PropTypes.func.isRequired
};

const defaultProps = {
    active: false,
    effect: 'simple',
    position: 'Left',
    deactivateMenu: () => {}
};

export class MenuSlider extends Component {

    constructor(props) {
        super(props);

        this.handleMenuState = this.handleMenuState.bind(this);
        this.pageWrap = document.getElementById('page-wrap');
    }

    componentDidMount() {
        const transitionName = this.props.effect.split('-')[1];
        elementClass(this.pageWrap).add(`pageWrap-${transitionName}`);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        const {position, active, effect} = this.props;
        const transitionName = effect.split('-')[1];
        elementClass(this.pageWrap).toggle(`pageWrap-${transitionName}${position}`, active);
    }

    componentWillUnmount() {
        const transitionName = this.props.effect.split('-')[1];
        elementClass(this.pageWrap).remove(`pageWrap-${transitionName}`);
    }

    handleMenuState(state) {
        if (!state.isOpen) {
            this.props.deactivateMenu();
        }
    }

    render() {
        const {effect, position} = this.props;
        const sliderClasses = classNames(styles.slider, `menu-${effect.split('-')[1]}${position}`);

        return (
            <div className={sliderClasses}>
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
