import {includes} from 'lodash';

import {defaultState, validStates} from 'HeaderConfigApp/constants/states';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Flyout":["Search","Currency","Language","MyAccount","SocialIcons"],"Hidden":["Breadcrumb","Search","MyAccount"],"TopLeft":["MenuIcon"],"TopCenter":["Logo"],"TopRight":["Cart","Wishlist"],"Main":["Menu"],"Bottom":["WelcomeMessage"]},"tablet":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]},"desktop":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]}}';
    let currentSettings;

    try {
        currentSettings = {
            data: JSON.parse(shopifySettings),
            shouldComponentUpdate: false
        };
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead ');
        currentSettings = {...defaultState.HeaderConfig, shouldComponentUpdate: false};
    }

    return currentSettings;
};

/**
 * Validate State
 * @param state
 * @returns {{}}
 */
export const validateState = state => {
    let
        _loadDefaultSettings = () => {
            console.warn(`Conditions not met; default settings will be loaded.`);
            return {...defaultState.HeaderConfig.data};
        },

        _validateEachItem = () => {
            return true;
        },

        _validateItems = () => {
            return _validateEachItem();
        },

        _validateCells = () => {
            return _validateItems();
        },

        _validate = () => {
            const validMediaQueries = Object.keys(validStates);
            const stateMediaQueries = Object.keys(state.data);

            for (let i = 0, len = stateMediaQueries.length; i < len; i++) {
                if (!includes(validMediaQueries, stateMediaQueries[i])) {
                    console.warn(`The media query "${stateMediaQueries[i]}" is not valid !`);
                    return false;
                }
            }

            return _validateCells();
        };

    return {
        data: _validate() ? {...state.data} : _loadDefaultSettings(),
        shouldComponentUpdate: false
    };
};
