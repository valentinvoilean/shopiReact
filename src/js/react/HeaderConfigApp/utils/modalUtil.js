import { forOwn, includes, has } from 'lodash';
import { defaultState, validStates } from 'HeaderConfigApp/constants/states';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Flyout":["Search","Currency","Language","MyAccount","SocialIcons"],"Hidden":["CustomLink1","CustomLink2","CustomLink3","CustomLink4","Breadcrumb","Search","MyAccount"],"TopLeft":["MenuIcon"],"TopCenter":["Logo"],"TopRight":["Cart","Wishlist"],"Main":["Menu"],"Bottom":["WelcomeMessage"]},"tablet":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]},"desktop":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]}}';
    let currentState;

    try {
        currentState = JSON.parse(shopifySettings);
    }
    catch (err) {
        console.warn('Data not valid ! The default settings will be used instead ');
        currentState = {...defaultState.HeaderConfig};
    }

    return currentState;
};

/**
 * Validate State
 * @param state
 * @returns {{}}
 */
export const validateState = state => {
    let wantedState = {...state},
        newState = {},
        areas,
        validAreas,

        _loadDefaultSettings = (mediaQuery) => {
            console.warn(`Conditions not met; default settings will be loaded.`);
            newState[mediaQuery] = {...defaultState.HeaderConfig[mediaQuery]};
        },

        _parseEachHeaderArea = (mediaQuery) => {
            forOwn(areas, (value, key) => {
                const items = validAreas[key] instanceof Array ? validAreas[key] : validAreas[key].items;

                value.map(item => {
                    if (!includes(items, item)) {
                        _loadDefaultSettings(mediaQuery);
                        return false;
                    }
                });
            });
        };

    return (() => {
        // Go trough each media query
        forOwn(validStates, (value, mediaQuery) => {
            if (!has(wantedState, mediaQuery)) {
                return _loadDefaultSettings(mediaQuery);
            }

            areas = {...wantedState[mediaQuery]};
            validAreas = {...value};
            newState[mediaQuery] = areas;

            _parseEachHeaderArea(mediaQuery);
        });

        return {...defaultState.HeaderConfig, ...newState};
    })();
};

