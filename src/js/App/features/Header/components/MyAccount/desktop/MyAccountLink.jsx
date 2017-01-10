import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

import * as actions from 'App/store/modules/MyAccount';

const propTypes = {
    children: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    myAccountState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export class MyAccountLinkPure extends Component {

    constructor(props) {
        super(props);

        this.updateLinkRef = this.updateLinkRef.bind(this);
        this.activateItem = this.activateItem.bind(this);
        this.activateItemByKeyboard = this.activateItemByKeyboard.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    activateItemByKeyboard(e) {
        if (e.key === 'Enter') {
            this.activateItem();
        }
    }

    activateItem() {
        this.props.actions.activateLink({
            activeLink: this.props.name
        });
    }

    updateLinkRef(c) {
        this.link = c;
    }

    render() {
        const {link, children, name, myAccountState} = this.props;

        const linkClasses = classNames('myAccount__link', {
            [`${SHARED_CLASSES.active}`]: myAccountState.get('activeLink') === name
        });

        return (
            <a className={linkClasses}
               href={link}
               ref={this.updateLinkRef}
               onMouseOver={this.activateItem}
               onFocus={this.activateItem}
               onTouchEnd={this.activateItem}
               onKeyDown={this.activateItemByKeyboard}
            >
                {children}
            </a>
        );
    }
}

MyAccountLinkPure.propTypes = propTypes;

export default connect(
    state => ({myAccountState: state.myAccount}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(MyAccountLinkPure);
