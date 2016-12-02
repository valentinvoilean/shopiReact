import {forOwn, includes, has} from 'lodash';

import {defaultState, validStates} from 'HeaderConfigApp/constants/states';

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

/**
 * Validate State
 * @param state
 * @returns {{}}
 */
export const validateState = state => {
    let wantedState = {...state.data},
        newState = {},
        areas,
        validAreas,

        _loadDefaultSettings = (mediaQuery) => {
            console.warn(`Conditions not met; default settings will be loaded.`);
            newState[mediaQuery] = {...defaultState.HeaderConfig.data[mediaQuery]};
        },

        _validateCellNames = (mediaQuery) => {
            const validCellNames = Object.keys(validAreas);
            const availableCellNames = Object.keys(areas);

            for (let i = 0, len = availableCellNames.length; i < len; i++) {
                if (validCellNames.indexOf(availableCellNames[i]) === -1) {
                    console.warn(`The cell ${availableCellNames[i]} doesn't exist!`);
                    _loadDefaultSettings(mediaQuery);
                    return false;
                }
            }

            return true;
        },

        _parseEachHeaderArea = (mediaQuery) => {
            if (!_validateCellNames(mediaQuery)) {
                return;
            }

            forOwn(areas, (value, key) => {
                const items = validAreas[key] instanceof Array ? validAreas[key] : validAreas[key].items;

                value.map(item => {
                    const itemNames = typeof items[0] === 'string' ? items : items.map((item) => item.name);

                    if (!includes(itemNames, item)) {
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

        return {
            data: {
                ...defaultState.HeaderConfig.data, ...newState
            },
            shouldComponentUpdate: false
        };
    })();
};
