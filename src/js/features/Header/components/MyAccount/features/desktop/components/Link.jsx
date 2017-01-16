import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'constants/classes';

import * as actions from 'store/modules/MyAccount';

const propTypes = {
    children: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool,
    name: PropTypes.string.isRequired,
    myAccountState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export function MyAccountLinkPure(props) {
    const {children, link, loggedIn, name, myAccountState, actions} = props;

    const activateItem = () => {
        actions.activateLink({
            activeLink: name,
            loggedIn: loggedIn || false
        });
    };

    const activateItemByKeyboard = (e) => {
        if (e.key === 'Enter') {
            activateItem();
        }
    };

    const linkClasses = classNames('myAccount__link', {
        [`${SHARED_CLASSES.active}`]: myAccountState
            .getIn(['activeLink', loggedIn ? 'loggedIn' : 'loggedOut']) === name
    });

    return (
        <a className={linkClasses}
           href={link}
           onMouseOver={activateItem}
           onFocus={activateItem}
           onTouchEnd={activateItem}
           onKeyDown={activateItemByKeyboard}
        >
            {children}
        </a>
    );
}

MyAccountLinkPure.propTypes = propTypes;

export default connect(
    state => ({myAccountState: state.myAccount}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MyAccountLinkPure);
