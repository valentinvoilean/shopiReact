import React, {Component} from 'react';
import {SHARED_CLASSES} from 'common/constants/classes';
import modernizr from 'modernizr';

export default class Wishlist extends Component {
    constructor() {
        super();

        this.activateItem = this.activateItem.bind(this);
        this.deactivateItem = this.deactivateItem.bind(this);
    }

    componentDidMount() {
        this.calculateWidths();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        this.calculateWidths();
        this.addEventHandlers();
    }

    calculateWidths() {
        $(this.$link).attr('data-width', $(this.$link).outerWidth());
        $(this.$link).addClass(SHARED_CLASSES.collapsed)
            .removeClass(SHARED_CLASSES.outsideViewport);
    }

    activateItemByKeyboard(e) {
        if (e.key === 'Enter') {
            this.slideInLink();
        }
    }

    activateItem(e) {
        if (modernizr.touchevents) {
            this.preventClickFirstTime(e);
        } else {
            this.slideInLink();
        }
    }

    deactivateItem(e) {
        if (modernizr.touchevents) {
            if (!this.$el.is(e.target) // if the target of the click isn't the container...
                && this.$el.has(e.target).length === 0) // ... nor a descendant of the container
            {
                this.slideOutLink();
            }
        } else {
            this.slideOutLink();
        }
    }

    preventClickFirstTime(e) {
        if (this.$el.hasClass(SHARED_CLASSES.active)) {
            return true;
        }
        else {
            e.preventDefault();
            this.$el.addClass(SHARED_CLASSES.active);
            this.slideInLink();
        }
    }

    slideInLink() {
        $(this.$link).addClass(SHARED_CLASSES.animate);
        $(this.$link).innerWidth($(this.$link).data('width')).removeClass(SHARED_CLASSES.collapsed);
        $(this.$link).addClass(SHARED_CLASSES.active);
    }

    slideOutLink() {
        $(this.$el).add($(this.$link)).removeClass(SHARED_CLASSES.active);
        $(this.$link).addClass(SHARED_CLASSES.collapsed);
    }

    render() {
        return (
            <button className="wishlist"
                    ref={(c) => this.$el = c}
                    onMouseOver={this.activateItem}
                    onMouseOut={this.deactivateItem}
                    onFocus={this.activateItem}
                    onBlur={this.deactivateItem}
                    onTouchEnd={this.activateItem}
                    onKeyDown={this.activateItemByKeyboard}
            >
                <a href="{% unless settings.wishlist_page == '' %}/pages/{{ settings.wishlist_page }}{% endunless %}"
                   className={`wishlist__link ${SHARED_CLASSES.outsideViewport}`}
                   ref={(c) => this.$link = c}
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
