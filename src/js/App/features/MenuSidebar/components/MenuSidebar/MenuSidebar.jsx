import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import Modal from 'react-modal';

//import {SHARED_CLASSES} from 'common/constants/classes';
import styles from './MenuSidebar.scss';

import * as actions from 'App/store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export function MenuSidebar({mainMenuState, actions}) {

    const menuClasses = classNames(styles.menu);
    const modalStyles = {
        overlay : {
          background: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
            display: 'none'
        }
    };

    return (
        <div>
            <div className={menuClasses}></div>
            <Modal isOpen={mainMenuState.getIn(['sidebar', 'active'])}
                   contentLabel="Modal"
                   onRequestClose={actions.toggleMenu}
                   style={modalStyles}
            />
        </div>
    );
}

MenuSidebar.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuSidebar);
