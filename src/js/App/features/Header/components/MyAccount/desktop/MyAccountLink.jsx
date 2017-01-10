import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

const propTypes = {
    children: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool
};

export default class MyAccountLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.active || false
        };

        this.updateLinkRef = this.updateLinkRef.bind(this);
        this.activateItem = this.activateItem.bind(this);
        this.deactivateItem = this.deactivateItem.bind(this);
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
        this.setState({isActive: true});

        //$(this).siblings().removeClass(SHARED_CLASSES.active);
    }

    deactivateItem() {
        this.setState({isActive: false});
        //$(this).addClass(SHARED_CLASSES.active);
        //$(this).siblings().removeClass(SHARED_CLASSES.active);
    }

    updateLinkRef(c) {
        this.link = c;
    }

    render() {
        const linkClasses = classNames('myAccount__link', {
            [`${SHARED_CLASSES.active}`]: this.state.isActive
        });

        return (
            <a className={linkClasses}
               href={this.props.link}
               ref={this.updateLinkRef}
               onMouseOver={this.activateItem}
               onFocus={this.activateItem}
               onTouchEnd={this.activateItem}
               onKeyDown={this.activateItemByKeyboard}
            >
                {this.props.children}
            </a>
        );
    }
}

MyAccountLink.propTypes = propTypes;
