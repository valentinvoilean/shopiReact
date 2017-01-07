import React from 'react';

export default function Wishlist() {
    return (
        <div className="wishList">
            <a href="{% unless settings.wishlist_page == '' %}/pages/{{ settings.wishlist_page }}{% endunless %}"
               className="wishList__link is-outside-viewport"
            >My Wishlist</a>

            <a href="{% unless settings.wishlist_page == '' %}/pages/{{ settings.wishlist_page }}{% endunless %}"
               className="wishList__img {% if wish_list_active %}is-active{% endif %}"
            >
                <div className="wishList__counter">{'{{ wish_list_length }}'}</div>
                <svg className="wishList__icon">
                    <use xlinkHref="#wish-list-1"></use>
                </svg>
                <svg className="wishList__icon">
                    <use xlinkHref="#wish-list-2"></use>
                </svg>
            </a>
        </div>
    );
}
