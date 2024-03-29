import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'shared/constants/classes';

import * as actions from './Link.duck';

const propTypes = {
    children: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    myAccountState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool,
};

const defaultProps = {
    loggedIn: false,
};

export function MyAccountLinkPure(props) {
    const {children, link, loggedIn, name, myAccountState, actions} = props;

    const activateItem = () => {
        actions.activateLink({
            activeLink: name,
            loggedIn: loggedIn,
        });
    };

    const activateItemByKeyboard = (e) => {
        if (e.key === 'Enter') {
            activateItem();
        }
    };

    const linkClasses = classNames('myAccount__link', {
        [`${SHARED_CLASSES.active}`]: myAccountState
            .getIn(['activeLink', loggedIn ? 'loggedIn' : 'loggedOut']) === name,
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
MyAccountLinkPure.defaultProps = defaultProps;

export default connect(
    state => ({myAccountState: state.myAccount}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MyAccountLinkPure);
