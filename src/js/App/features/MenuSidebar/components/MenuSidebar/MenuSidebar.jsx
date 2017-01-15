import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SidebarStyles from 'App/features/MenuSidebar/components';

import * as actions from 'App/store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export function MenuSidebar({mainMenuState, actions}) {
    const sidebarEffect = mainMenuState.getIn(['sidebar', 'effect']);

    return React.createElement(SidebarStyles[sidebarEffect], {
        mainMenuState, actions
    });
}

MenuSidebar.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuSidebar);
