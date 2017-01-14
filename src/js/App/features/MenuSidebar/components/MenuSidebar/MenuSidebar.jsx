import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

//import {SHARED_CLASSES} from 'common/constants/classes';
import styles from './MenuSidebar.scss';

import * as actions from 'App/store/modules/MainMenu';

const propTypes = {
    mainMenuState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export function MenuSidebar() {

    const menuClasses = classNames(styles.menu);

    return (
        <div>
            <div className={menuClasses}></div>
        </div>
    );
}

MenuSidebar.propTypes = propTypes;

export default connect(
    state => ({mainMenuState: state.mainMenu}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MenuSidebar);
