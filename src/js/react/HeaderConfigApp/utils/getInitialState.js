import {defaultState} from 'HeaderConfigApp/constants/states';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Hidden":["Breadcrumb","Search","MyAccount"],"TopLeft":["MenuIcon"],"TopCenter":["Logo"],"TopRight":["Cart","Wishlist"],"Main":["Menu"],"Bottom":["WelcomeMessage"]},"tablet":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]},"desktop":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]}}';
    let currentSettings;

    try {
        currentSettings = {
            data: JSON.parse(shopifySettings),
            shouldComponentUpdate: false
        };
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead ');
        currentSettings = {...defaultState.HeaderConfig};
    }

    return currentSettings;
};


