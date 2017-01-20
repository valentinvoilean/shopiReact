import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fallDown from 'react-burger-menu/lib/menus/fallDown';
import push from 'react-burger-menu/lib/menus/push';
import pushRotate from 'react-burger-menu/lib/menus/pushRotate';
import scaleDown from 'react-burger-menu/lib/menus/scaleDown';
import scaleRotate from 'react-burger-menu/lib/menus/scaleRotate';
import slide from 'react-burger-menu/lib/menus/slide';
import stack from 'react-burger-menu/lib/menus/stack';

import * as actions from 'store/modules/MainMenu';

const menus = {
    fallDown, push, pushRotate, scaleDown, scaleRotate, slide, stack
};

const propTypes = {
    effect: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    isRightSide: PropTypes.bool.isRequired,
    deactivateMenu: PropTypes.func.isRequired
};

const defaultProps = {
    effect: 'simple',
    active: false,
    isRightSide: false,
    deactivateMenu: () => {}
};

export class Overlay extends Component {

    constructor(props) {
        super(props);

        this.handleMenuState = this.handleMenuState.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        this.props.deactivateMenu();
    }

    handleMenuState(state) {
        if (!state.isOpen) {
            this.props.deactivateMenu();
        }
    }

    render() {
        const {effect, isRightSide, active} = this.props;
        const transitionName = effect.split('-')[1];
        const Menu = menus[transitionName];

        return (
            <Menu pageWrapId="page-wrap"
                  outerContainerId="outer-container"
                  isOpen={active}
                  right={isRightSide}
                  onStateChange={this.handleMenuState}
            >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default connect(
    state => ({...state.mainMenu.toJS().sidebar}),
    dispatch => ({...bindActionCreators(actions, dispatch)})
)(Overlay);
