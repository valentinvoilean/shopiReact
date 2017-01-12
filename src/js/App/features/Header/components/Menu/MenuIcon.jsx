import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

import * as actions from 'App/store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export function MenuIconPure({mainMenuState, actions}) {
    const toggleByKeboard = (e) => {
        if (e.key === 'Enter') {
            actions.toggleMenu();
        }
    };

    const elClasses = classNames('menuIcon', 'menuIcon--x', {
        [`${SHARED_CLASSES.active}`]: mainMenuState.getIn(['menuIcon', 'active'])
    });

    return (
        <a className={elClasses}
           onClick={actions.toggleMenu}
           onKeyDown={toggleByKeboard}
           tabIndex="0"
           role="button"
        >
            <span>toggle menu</span>
        </a>
    );
}

MenuIconPure.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuIconPure);
