export const defaultState = {
    HeaderConfig: {
        mobile: {
            Logo: {position: 'MainCenter', order: 0},
            Menu: {position: 'MainLeft', order: 0},
            MyAccount: {position: 'MainRight', order: 1},
            Wishlist: {position: 'MainRight', order: 1}
        },
        tablet: {
            Logo: {position: 'MainLeft', order: 0},
            Menu: {position: 'MainCenter', order: 0},
            MyAccount: {position: 'TopRight', order: 1},
            Wishlist: {position: 'TopRight', order: 1}
        },
        desktop: {
            Logo: {position: 'MainLeft', order: 0},
            Menu: {position: 'MainCenter', order: 0},
            MyAccount: {position: 'TopRight', order: 1},
            Wishlist: {position: 'TopRight', order: 1}
        }
    }
};
