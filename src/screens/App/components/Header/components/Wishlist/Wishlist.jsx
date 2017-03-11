import React, {Component} from 'react';
import classNames from 'classnames';

import {Icon} from 'shared/components';
import wishlist1 from 'static/svg/wish-list-1.svg';
import wishlist2 from 'static/svg/wish-list-2.svg';

import {SHARED_CLASSES} from 'shared/constants/classes';

export default class Wishlist extends Component {
    constructor() {
        super();

        this.state = {
            isLinkOutsideViewport: true,
            isLinkCollapsed: false,
            isLinkAnimated: false,
            isLinkActive: false,
            isElActive: false,
            linkWidth: '',
        };

        this.activateItem = this.activateItem.bind(this);
        this.deactivateItem = this.deactivateItem.bind(this);
        this.updateWishlistRef = this.updateWishlistRef.bind(this);
    }

    componentDidMount() {
        this.calculateWidths();
        if (window.Modernizr.touchevents) {
            window.addEventListener('click', this.deactivateItem, false);
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        if (window.Modernizr.touchevents) {
            window.removeEventListener('click', this.deactivateItem);
        }
    }

    calculateWidths() {
        this.setState({
            linkWidth: this.wishlistLink.offsetWidth,
            isLinkCollapsed: true,
            isLinkOutsideViewport: false,
        });
    }

    activateItemByKeyboard(e) {
        if (e.key === 'Enter') {
            this.slideInLink();
        }
    }

    activateItem(e) {
        e.stopPropagation();

        if (window.Modernizr.touchevents) {
            this.preventClickFirstTime(e);
        } else {
            this.slideInLink();
        }
    }

    deactivateItem(e) {
        if (window.Modernizr.touchevents) {
            if (e.target !== this.wishlistEl // if the target of the click isn't the container...
                && !this.wishlistEl.contains(e.target)) // ... nor a descendant of the container
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
            isLinkCollapsed: false,
        });
    }

    slideOutLink() {
        this.setState({
            isLinkActive: false,
            isElActive: false,
            isLinkCollapsed: true,
        });
    }

    updateWishlistRef(c) {
      this.wishlistEl = c;
    }

    render() {
        const linkClasses = classNames('wishlist__link', {
            [`${SHARED_CLASSES.outsideViewport}`]: this.state.isLinkOutsideViewport,
            [`${SHARED_CLASSES.collapsed}`]: this.state.isLinkCollapsed,
            [`${SHARED_CLASSES.animate}`]: this.state.isLinkAnimated,
            [`${SHARED_CLASSES.active}`]: this.state.isLinkActive,
        });

        const elClasses = classNames('wishlist', {
            [`${SHARED_CLASSES.active}`]: this.state.isElActive,
        });

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <div className={elClasses}
                    ref={this.updateWishlistRef}
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
                    <Icon glyph={wishlist1} className="wishlist__icon" />
                    <Icon glyph={wishlist2} className="wishlist__icon" />
                </a>
            </div>
        );
        /* eslint-enable */
    }
}
