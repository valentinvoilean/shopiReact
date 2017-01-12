import React, {Component} from 'react';
import classNames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

export default class MenuIcon extends Component {

    constructor() {
        super();

        this.state = {
            isMenuActive: false
        };

        this.toggleByKeboard = this.toggleByKeboard.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    toggleByKeboard(e) {
        if (e.key === 'Enter') {
            this.toggleMenu();
        }
    }

    toggleMenu() {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        });
    }

    render() {
        const elClasses = classNames('menuIcon', 'menuIcon--x', {
            [`${SHARED_CLASSES.active}`]: this.state.isMenuActive
        });

        return (
            <a className={elClasses}
               onClick={this.toggleMenu}
               onKeyDown={this.toggleByKeboard}
               tabIndex="0"
               role="button"
            >
                <span>toggle menu</span>
            </a>
        );
    }
}
