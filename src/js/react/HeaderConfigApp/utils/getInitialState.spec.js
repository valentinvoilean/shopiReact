import getInitialState from './getInitialState';

jest.mock('HeaderConfigApp/constants/states');
const states = require('HeaderConfigApp/constants/states');

describe('Get initial state', () => {
    it('should return the default state if the settings are not a valid json', () => {
        states.shopifySettings = '{{}';
        expect(getInitialState()).toBe(states.defaultState.get('HeaderConfig'));
    });

    it('should return the shopify settings if these are a valid json', () => {
        states.shopifySettings = '{"mobile":{"Hidden":["Breadcrumb","Search","MyAccount"],"TopLeft":["MenuIcon"],"TopCenter":["Logo"],"TopRight":["Cart","Wishlist"],"Main":["Menu"],"Bottom":["WelcomeMessage"]},"tablet":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]},"desktop":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]}}';
        expect(getInitialState()).not.toBe(states.defaultState.get('HeaderConfig'));
    })
});
