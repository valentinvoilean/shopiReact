import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import elementClass from 'element-class';
import {Modal} from 'components';

import * as actions from 'store/modules/MainMenu';
import {MenuSlider, MenuOverlay} from 'features/MenuSidebar/components';

const propTypes = {
    active: PropTypes.bool.isRequired,
    isLight: PropTypes.bool.isRequired,
    effect: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export class MenuSidebar extends Component {
    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        const outerContainer = document.getElementById('outer-container');
        elementClass(outerContainer).toggle('activateMenu', this.props.active);
    }

    componentWillUnmount() {
        const outerContainer = document.getElementById('outer-container');
        elementClass(outerContainer).remove('activateMenu');
    }

    render() {
        const {effect, actions, isLight} = this.props;
        return (
            <div>
                {effect === 'MenuSlider' ? <MenuSlider /> : <MenuOverlay />}
                <Modal overlayClassName="menu-fade" isLight={isLight} onClick={actions.deactivateMenu} />
            </div>
        );
    }
}

MenuSidebar.propTypes = propTypes;

export default connect(
    state => ({
        active: state.mainMenu.getIn(['sidebar', 'active']),
        isLight: state.mainMenu.getIn(['sidebar', 'isLight']),
        effect: state.mainMenu.getIn(['sidebar', 'effect']).split('-')[0]
    }),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuSidebar);
