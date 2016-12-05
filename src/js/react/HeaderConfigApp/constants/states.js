import { List, Map } from 'immutable';

export const defaultState = Map({
    HeaderConfig: Map({
        data: Map({
            mobile: Map({
                Hidden: List(['Breadcrumb', 'Search', 'MyAccount']),
                TopLeft: List(['MenuIcon']),
                TopCenter: List(['Logo']),
                TopRight: List(['Cart', 'Wishlist']),
                Main: List(['Menu']),
                Bottom: List(['WelcomeMessage'])
            }),
            tablet: Map({
                Hidden: List(['CustomLink3', 'CustomLink4']),
                TopLeft: List(['Currency', 'Language', 'CustomLink1', 'CustomLink2']),
                TopCenter: List([]),
                TopRight: List(['MyAccount', 'Wishlist']),
                MainLeft: List(['Logo']),
                MainCenter: List(['Menu']),
                MainRight: List(['Cart', 'Search']),
                BottomLeft: List(['Breadcrumb']),
                BottomCenter: List([]),
                BottomRight: List(['SocialIcons', 'WelcomeMessage'])
            }),
            desktop: Map({
                Hidden: List(['CustomLink3', 'CustomLink4']),
                TopLeft: List(['Currency', 'Language', 'CustomLink1', 'CustomLink2']),
                TopCenter: List([]),
                TopRight: List(['MyAccount', 'Wishlist']),
                MainLeft: List(['Logo']),
                MainCenter: List(['Menu']),
                MainRight: List(['Cart', 'Search']),
                BottomLeft: List(['Breadcrumb']),
                BottomCenter: List([]),
                BottomRight: List(['SocialIcons', 'WelcomeMessage'])
            })
        }),
        shouldComponentUpdate: false
    })
});

export const validStates = Map({
    mobile: {
        Hidden: ['Wishlist', 'MyAccount', 'Currency', 'Language', 'Breadcrumb', 'WelcomeMessage', 'SocialIcons', 'Search', 'Menu'],
        TopLeft: {
            items: [
                {
                    name: 'MenuIcon',
                    required: {
                        name: 'Logo',
                        position: ['TopCenter', 'TopLeft']
                    }
                },
                {
                    name: 'Logo',
                    required: {
                        name: 'MenuIcon',
                        position: 'TopLeft'
                    }
                }
            ],
            max: 2
        },
        TopCenter: ['Logo'],
        TopRight: {
            items: [
                {
                    name: 'MyAccount'
                },
                {
                    name: 'Wishlist'
                },
                {
                    name: 'Cart'
                },
                {
                    name: 'Search'
                },
                {
                    name: 'MenuIcon',
                    required: {
                        name: 'Logo',
                        position: 'TopCenter'
                    }
                }
            ]
        },
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
        TopCenter: ['WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopRight: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainLeft: ['MyAccount', 'Wishlist', 'Logo', 'Search', 'SocialIcons', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainCenter: {
            items: ['Logo', 'Menu'],
            max: 1
        },
        MainRight: ['MyAccount', 'Wishlist', 'Search', 'Cart', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomLeft: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
        BottomCenter: ['Menu', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomRight: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4']
    },
    desktop: {
        Hidden: ['MyAccount', 'Wishlist', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopLeft: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopCenter: ['WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopRight: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainLeft: ['MyAccount', 'Wishlist', 'Logo', 'Search', 'SocialIcons', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainCenter: {
            items: ['Logo', 'Menu'],
            max: 1
        },
        MainRight: ['MyAccount', 'Wishlist', 'Search', 'Cart', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomLeft: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
        BottomCenter: ['Menu', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomRight: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4']
    }
});
