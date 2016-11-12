export const defaultState = {
    HeaderConfig: {
        mobile: {
            Flyout: ['Search', 'Currency', 'Language', 'MyAccount', 'SocialIcons'],
            Hidden: ['CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb', 'Search', 'MyAccount'],
            TopLeft: ['MenuIcon'],
            TopCenter: ['Logo'],
            TopRight: ['Cart', 'Wishlist'],
            Main: ['Menu'],
            Bottom: ['WelcomeMessage']
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
        Flyout: ['MenuIcon', 'MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'MyAccount', 'SocialIcons'],
        Hidden: ['Wishlist', 'MyAccount', 'Currency', 'Language', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb', 'WelcomeMessage', 'SocialIcons', 'Search', 'Menu'],
        TopLeft: ['MenuIcon', 'Logo'],
        TopCenter: ['Logo'],
        TopRight: ['MyAccount', 'Wishlist', 'Cart', 'Search'],
        Main: {
            items: ['Menu', 'WelcomeMessage'],
            max: 1
        },
        Bottom: {
            items: ['Menu', 'WelcomeMessage'],
            max: 1
        }
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
