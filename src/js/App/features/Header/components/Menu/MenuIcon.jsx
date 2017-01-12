import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

import * as actions from 'App/store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export class MenuIconPure extends Component {
    constructor(props) {
        super(props);

        this.toggleByKeboard = this.toggleByKeboard.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    toggleByKeboard(e) {
        if (e.key === 'Enter') {
            this.toggleMenu();
        }
    }

    toggleMenu() {
        this.props.actions.toggleMenu();
    }

    render() {
        const elClasses = classNames('menuIcon', 'menuIcon--x', {
            [`${SHARED_CLASSES.active}`]: this.props.mainMenuState.getIn(['menuIcon', 'active'])
        });

        return (
            <a className={elClasses}
               onClick={this.toggleMenu}
               onKeyDown={this.toggleByKeboard}
               tabIndex="0"
               role="button"
            >
                <span>toggle menu</span>
            </a>
        );
    }
}

MenuIconPure.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuIconPure);
