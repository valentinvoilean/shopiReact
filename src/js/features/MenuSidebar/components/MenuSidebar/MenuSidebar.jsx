import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import elementClass from 'element-class';

import * as SidebarStyles from 'features/MenuSidebar/components';

const propTypes = {
    active: PropTypes.bool.isRequired,
    effect: PropTypes.string.isRequired
};

export class MenuSidebar extends Component {
    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        const outerContainer = document.getElementById('outer-container');
        elementClass(outerContainer).toggle('activateMenu', this.props.active);
    }

    render() {
        return React.createElement(SidebarStyles[this.props.effect]);
    }
}

MenuSidebar.propTypes = propTypes;

export default connect(
    state => ({
        active: state.mainMenu.getIn(['sidebar', 'active']),
        effect: state.mainMenu.getIn(['sidebar', 'effect']).split('-')[0]
    })
)(MenuSidebar);
