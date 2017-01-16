import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import * as SidebarStyles from 'features/MenuSidebar/components';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired
};

export class MenuSidebar extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const sidebarEffect = this.props.mainMenuState.getIn(['sidebar', 'effect']).split('-')[0];
        return React.createElement(SidebarStyles[sidebarEffect]);
    }
}

MenuSidebar.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu})
)(MenuSidebar);
