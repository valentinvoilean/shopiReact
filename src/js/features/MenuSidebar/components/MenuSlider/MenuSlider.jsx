import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import elementClass from 'element-class';

import {Modal} from 'components';
import styles from './MenuSlider.scss';
import * as actions from 'store/modules/MainMenu';

import {SHARED_CLASSES} from 'constants/classes';

const propTypes = {
    active: PropTypes.bool.isRequired,
    isLight: PropTypes.bool.isRequired,
    effect: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    deactivateMenu: PropTypes.func.isRequired
};

const defaultProps = {
    active: false,
    isLight: false,
    effect: 'simple',
    position: 'Left',
    deactivateMenu: () => {}
};

export class MenuSlider extends Component {

    constructor(props) {
        super(props);

        this.pageWrap = document.getElementById('page-wrap');
        this.modal = document.createElement('div');
    }

    componentWillMount() {
        const transitionName = this.props.effect.split('-')[1];
        elementClass(this.pageWrap).add(`pageWrap-${transitionName}`);

        this.createModal();
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
        this.destroyModal();
    }

    createModal() {
        const {isLight, deactivateMenu} = this.props;

        this.pageWrap.appendChild(this.modal);
        ReactDOM.render(
            <Modal overlayClassName={SHARED_CLASSES.defaultMenuOverlayEffect}
                   isLight={isLight}
                   onClick={deactivateMenu}
            />
            , this.modal
        );
    }

    destroyModal() {
        ReactDOM.unmountComponentAtNode(this.modal);
        this.pageWrap.removeChild(this.modal);
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
