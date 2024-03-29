import {fromJS, Map} from 'immutable';

//TODO leave only prod mode when done
export const headerSettings = window.env === 'development' ? '{"mobile":{"Hidden":["Breadcrumb","Search","MyAccount"],"TopLeft":["MenuIcon"],"TopCenter":["Logo"],"TopRight":["Cart","Wishlist"],"Main":["Menu"],"Bottom":["WelcomeMessage"]},"tablet":{"MainLeft":["Logo"],"BottomCenter":[],"MainRight":["Cart","Search"],"TopRight":["MyAccount","Wishlist"],"Hidden":["CustomLink3","CustomLink4"],"TopCenter":[],"MainCenter":["Menu"],"BottomRight":["SocialIcons","WelcomeMessage"],"BottomLeft":["Breadcrumb"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"]},"desktop":{"MainLeft":["Logo"],"BottomCenter":[],"MainRight":["Cart","Search"],"TopRight":["MyAccount","Wishlist"],"Hidden":["CustomLink3","CustomLink4"],"TopCenter":[],"MainCenter":["Menu"],"BottomRight":["SocialIcons","WelcomeMessage"],"BottomLeft":["Breadcrumb"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"]}}' : '{{ settings.header_configurator_settings }}';

export const defaultState = fromJS({
    data: {
        mobile: {
            Hidden: ['Breadcrumb', 'Search', 'MyAccount'],
            TopLeft: ['MenuIcon'],
            TopCenter: ['Logo'],
            TopRight: ['Cart', 'Wishlist'],
            Main: ['Menu'],
            Bottom: ['WelcomeMessage'],
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
            BottomRight: ['SocialIcons', 'WelcomeMessage'],
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
            BottomRight: ['SocialIcons', 'WelcomeMessage'],
        },
    },
    shouldComponentUpdate: false,
});

export let validStates = Map({
    mobile: {
        Hidden: ['Wishlist', 'MyAccount', 'Currency', 'Language', 'Breadcrumb', 'WelcomeMessage', 'SocialIcons', 'Search', 'Menu'],
        TopLeft: {
            items: [
                {
                    name: 'MenuIcon',
                    required: {
                        name: 'Logo',
                        position: ['TopCenter', 'TopLeft'],
                    },
                },
                {
                    name: 'Logo',
                    required: {
                        name: 'MenuIcon',
                        position: 'TopLeft',
                    },
                },
            ],
            max: 2,
        },
        TopCenter: ['Logo'],
        TopRight: {
            items: [
                {
                    name: 'MyAccount',
                },
                {
                    name: 'Wishlist',
                },
                {
                    name: 'Cart',
                },
                {
                    name: 'Search',
                },
                {
                    name: 'MenuIcon',
                    required: {
                        name: 'Logo',
                        position: 'TopCenter',
                    },
                },
            ],
        },
        Main: {
            items: ['Menu', 'WelcomeMessage'],
            max: 1,
        },
        Bottom: {
            items: ['Menu', 'WelcomeMessage'],
            max: 1,
        },
    },
    tablet: {
        Hidden: ['MyAccount', 'Wishlist', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopLeft: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopCenter: ['WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopRight: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainLeft: ['MyAccount', 'Wishlist', 'Logo', 'Search', 'SocialIcons', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainCenter: {
            items: ['Logo', 'Menu'],
            max: 1,
        },
        MainRight: ['MyAccount', 'Wishlist', 'Search', 'Cart', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomLeft: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
        BottomCenter: ['Menu', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomRight: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
    },
    desktop: {
        Hidden: ['MyAccount', 'Wishlist', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopLeft: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopCenter: ['WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        TopRight: ['MyAccount', 'Wishlist', 'Search', 'Currency', 'Language', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainLeft: ['MyAccount', 'Wishlist', 'Logo', 'Search', 'SocialIcons', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        MainCenter: {
            items: ['Logo', 'Menu'],
            max: 1,
        },
        MainRight: ['MyAccount', 'Wishlist', 'Search', 'Cart', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomLeft: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4', 'Breadcrumb'],
        BottomCenter: ['Menu', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
        BottomRight: ['MyAccount', 'Wishlist', 'Search', 'SocialIcons', 'WelcomeMessage', 'CustomLink1', 'CustomLink2', 'CustomLink3', 'CustomLink4'],
    },
});
