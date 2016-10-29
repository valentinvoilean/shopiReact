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

export const validStates = {
    mobile: {
        Logo: ['MainLeft', 'MainCenter'],
        Menu: ['MainLeft', 'MainRight'],
        MyAccount: ['MainLeft|Logo-MainCenter', 'MainRight', 'Menu'],
        Wishlist: ['MainLeft|Logo-MainCenter', 'MainRight', 'Menu']
    },
    tablet: {
        Logo: ['MainLeft', 'MainCenter'],
        Menu: ['MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight'],
        MyAccount: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight'],
        Wishlist: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight']
    },
    desktop: {
        Logo: ['MainLeft', 'MainCenter'],
        Menu: ['MainCenter', 'BottomLeft', 'BottomCenter', 'BottomRight'],
        MyAccount: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight'],
        Wishlist: ['TopLeft', 'TopRight', 'MainLeft|Logo-MainCenter', 'MainRight', 'BottomLeft', 'BottomRight']
    }
};
