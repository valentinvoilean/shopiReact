import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import elementClass from 'element-class';

import * as SidebarStyles from 'features/MenuSidebar/components';
import * as actions from 'store/modules/MainMenu';

const propTypes = {
    deactivateMenu: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    effect: PropTypes.string.isRequired,
};

const defaultProps = {
    deactivateMenu: () => {},
    active: false,
    effect: '',
};

export class MenuSidebar extends Component {
    constructor(props) {
        super(props);

        this.outerContainer = document.getElementById('outer-container');
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        elementClass(this.outerContainer).toggle('activateMenu', this.props.active);
    }

    componentWillUnmount() {
        elementClass(this.outerContainer).remove('activateMenu');
        this.props.deactivateMenu();

    }

    render() {
        return React.createElement(SidebarStyles[this.props.effect]);
    }
}

MenuSidebar.propTypes = propTypes;
MenuSidebar.defaultProps = defaultProps;

export default connect(
    state => ({
        active: state.mainMenu.getIn(['sidebar', 'active']),
        effect: state.mainMenu.getIn(['sidebar', 'effect']).split('-')[0],
    }),
    dispatch => ({...bindActionCreators(actions, dispatch)})
)(MenuSidebar);
