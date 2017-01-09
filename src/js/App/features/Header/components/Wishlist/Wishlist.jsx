import React, {Component} from 'react';
import classnames from 'classnames';

import {SHARED_CLASSES} from 'common/constants/classes';

export default class Wishlist extends Component {
    constructor() {
        super();

        this.state = {
            isLinkOutsideViewport: true,
            isLinkCollapsed: false,
            isLinkAnimated: false,
            isLinkActive: false,
            isElActive: false,
            linkWidth: ''
        };

        this.activateItem = this.activateItem.bind(this);
        this.deactivateItem = this.deactivateItem.bind(this);
    }

    componentDidMount() {
        this.calculateWidths();
    }

    shouldComponentUpdate() {
        return true;
    }

    calculateWidths() {
        this.setState({
            linkWidth: this.wishlistLink.offsetWidth,
            isLinkCollapsed: true,
            isLinkOutsideViewport: false
        });
    }

    activateItemByKeyboard(e) {
        if (e.key === 'Enter') {
            this.slideInLink();
        }
    }

    activateItem(e) {
        if (window.Modernizr.touchevents) {
            this.preventClickFirstTime(e);
        } else {
            this.slideInLink();
        }
    }

    deactivateItem(e) {
        if (window.Modernizr.touchevents) {
            if (!this.wishlistEl.is(e.target) // if the target of the click isn't the container...
                && this.wishlistEl.has(e.target).length === 0) // ... nor a descendant of the container
            {
                this.slideOutLink();
            }
        } else {
            this.slideOutLink();
        }
    }

    preventClickFirstTime(e) {
        if (this.state.isElActive) {
            return true;
        }

        e.preventDefault();
        this.slideInLink();
    }

    slideInLink() {
        this.setState({
            isLinkAnimated: true,
            isLinkActive: true,
            isElActive: true,
            isLinkCollapsed: false
        });
    }

    slideOutLink() {
        this.setState({
            isLinkActive: false,
            isElActive: false,
            isLinkCollapsed: true
        });
    }

    render() {
        const linkClasses = classnames('wishlist__link', {
            [`${SHARED_CLASSES.outsideViewport}`]: this.state.isLinkOutsideViewport,
            [`${SHARED_CLASSES.collapsed}`]: this.state.isLinkCollapsed,
            [`${SHARED_CLASSES.animate}`]: this.state.isLinkAnimated,
            [`${SHARED_CLASSES.active}`]: this.state.isLinkActive
        });

        const elClasses = classnames('wishlist', {
            [`${SHARED_CLASSES.active}`]: this.state.isElActive
        });

        return (
            <button className={elClasses}
                    ref={(c) => this.wishlistEl = c}
                    onMouseOver={this.activateItem}
                    onMouseOut={this.deactivateItem}
                    onFocus={this.activateItem}
                    onBlur={this.deactivateItem}
                    onTouchEnd={this.activateItem}
                    onKeyDown={this.activateItemByKeyboard}
            >
                <a href="{% unless settings.wishlist_page == '' %}/pages/{{ settings.wishlist_page }}{% endunless %}"
                   className={linkClasses}
                   ref={(c) => this.wishlistLink = c}
                   style={{ width: this.state.linkWidth }}
                >My Wishlist</a>

                <a href="{% unless settings.wishlist_page == '' %}/pages/{{ settings.wishlist_page }}{% endunless %}"
                   className="wishlist__img {% if wish_list_active %}is-active{% endif %}"
                >
                    <div className="wishlist__counter">{'{{ wish_list_length }}'}</div>
                    <svg className="wishlist__icon">
                        <use xlinkHref="#wish-list-1"></use>
                    </svg>
                    <svg className="wishlist__icon">
                        <use xlinkHref="#wish-list-2"></use>
                    </svg>
                </a>
            </button>
        );
    }
}
