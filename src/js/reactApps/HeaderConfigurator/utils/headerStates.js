export const defaultState = {
    HeaderConfig: {
        mobile: {
            Flyout: [],
            Hidden: [],
            MainLeft: ['Menu'],
            MainCenter: ['Logo'],
            MainRight: ['MyAccount', 'Wishlist'],
            BottomLeft: [],
            BottomCenter: [],
            BottomRight: []
        },
        tablet: {
            Hidden: [],
            TopLeft: [],
            TopCenter: [],
            TopRight: ['MyAccount', 'Wishlist'],
            MainLeft: ['Logo'],
            MainCenter: ['Menu'],
            MainRight: [],
            BottomLeft: [],
            BottomCenter: [],
            BottomRight: []
        },
        desktop: {
            Hidden: [],
            TopLeft: [],
            TopCenter: [],
            TopRight: ['MyAccount', 'Wishlist'],
            MainLeft: ['Logo'],
            MainCenter: ['Menu'],
            MainRight: [],
            BottomLeft: [],
            BottomCenter: [],
            BottomRight: []
        }
    }
};

export const validStates = {
    mobile: {
        Flyout: ['Menu', 'MyAccount', 'Wishlist'],
        Hidden: ['Wishlist', 'MyAccount'],
        MainLeft: ['Menu', 'Logo'],
        MainCenter: ['Logo'],
        MainRight: ['MyAccount', 'Wishlist'],
        BottomLeft: [],
        BottomCenter: [],
        BottomRight: []
    },
    tablet: {
        Hidden: ['MyAccount', 'Wishlist'],
        TopLeft: ['MyAccount', 'Wishlist'],
        TopCenter: [],
        TopRight: ['MyAccount', 'Wishlist'],
        MainLeft: ['Logo', 'MyAccount', 'Wishlist'],
        MainCenter: ['Logo', 'Menu'],
        MainRight: ['MyAccount', 'Wishlist'],
        BottomLeft: ['MyAccount', 'Wishlist'],
        BottomCenter: ['Menu'],
        BottomRight: ['MyAccount', 'Wishlist']
    },
    desktop: {
        Hidden: ['MyAccount', 'Wishlist'],
        TopLeft: ['MyAccount', 'Wishlist'],
        TopCenter: [],
        TopRight: ['MyAccount', 'Wishlist'],
        MainLeft: ['Logo', 'MyAccount', 'Wishlist'],
        MainCenter: ['Logo', 'Menu'],
        MainRight: ['MyAccount', 'Wishlist'],
        BottomLeft: ['MyAccount', 'Wishlist'],
        BottomCenter: ['Menu'],
        BottomRight: ['MyAccount', 'Wishlist']
    }
};
