export const defaultState = {
    HeaderConfig: {
        mobile: {
            Flyout: ['Search', 'Currency', 'Language', 'MyAccount', 'SocialIcons'],
            Hidden: ['CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
            MainLeft: ['Menu'],
            MainCenter: ['Logo'],
            MainRight: ['Cart', 'Wishlist'],
            BottomLeft: [],
            BottomCenter: ['WelcomeMessage'],
            BottomRight: []
        },
        tablet: {
            Hidden: ['CustomLink3', 'CustomLink4'],
            TopLeft: ['Currency', 'Language', 'CustomLink1', 'CustomLink2'],
            TopCenter: [],
            TopRight: ['MyAccount', 'Wishlist'],
            MainLeft: ['Logo'],
            MainCenter: ['Menu'],
            MainRight: ['Cart', 'Search'],
            BottomLeft: ['Breadcrumb'],
            BottomCenter: [],
            BottomRight: ['SocialIcons', 'WelcomeMessage']
        },
        desktop: {
            Hidden: ['CustomLink3', 'CustomLink4'],
            TopLeft: ['Currency', 'Language', 'CustomLink1', 'CustomLink2'],
            TopCenter: [],
            TopRight: ['MyAccount', 'Wishlist'],
            MainLeft: ['Logo'],
            MainCenter: ['Menu'],
            MainRight: ['Cart', 'Search'],
            BottomLeft: ['Breadcrumb'],
            BottomCenter: [],
            BottomRight: ['SocialIcons', 'WelcomeMessage']
        }
    }
};

export const validStates = {
    mobile: {
        Flyout: ['Menu', 'MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'MyAccount', 'SocialIcons'],
        Hidden: ['Wishlist', 'MyAccount', 'Currency', 'Language', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb', 'WelcomeMessage', 'SocialIcons'],
        MainLeft: ['Menu', 'Logo'],
        MainCenter: ['Logo'],
        MainRight: ['MyAccount', 'Wishlist', 'Cart'],
        BottomLeft: ['WelcomeMessage'],
        BottomCenter: ['WelcomeMessage'],
        BottomRight: ['WelcomeMessage']
    },
    tablet: {
        Hidden: ['MyAccount', 'Wishlist', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopLeft: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopCenter: [, 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopRight: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainLeft: ['MyAccount', 'Wishlist', 'Logo', 'Search', 'SocialIcons', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainCenter: ['Logo', 'Menu'],
        MainRight: ['MyAccount', 'Wishlist', 'Search', 'Cart', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomLeft: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
        BottomCenter: ['Menu', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomRight: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4']
    },
    desktop: {
        Hidden: ['MyAccount', 'Wishlist', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopLeft: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopCenter: [, 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopRight: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainLeft: ['MyAccount', 'Wishlist', 'Logo', 'Search', 'SocialIcons', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainCenter: ['Logo', 'Menu'],
        MainRight: ['MyAccount', 'Wishlist', 'Search', 'Cart', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomLeft: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
        BottomCenter: ['Menu', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomRight: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4']
    }
};
