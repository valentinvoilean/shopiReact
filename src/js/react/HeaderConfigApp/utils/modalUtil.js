import _ from 'lodash';
import { defaultState, validStates } from 'HeaderConfigApp/constants/states';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Flyout":["Search","Currency","Language","MyAccount","SocialIcons"],"Hidden":["CustomLink1","CustomLink2","CustomLink3","CustomLink4","Breadcrumb"],"MainLeft":["Menu"],"MainCenter":["Logo"],"MainRight":["Cart","Wishlist"],"BottomLeft":[],"BottomCenter":["WelcomeMessage"],"BottomRight":[]},"tablet":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]},"desktop":{"Hidden":["CustomLink3","CustomLink4"],"TopLeft":["Currency","Language","CustomLink1","CustomLink2"],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":["Cart","Search"],"BottomLeft":["Breadcrumb"],"BottomCenter":[],"BottomRight":["SocialIcons","WelcomeMessage"]}}';
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
            for (let area in areas) {
                if (areas.hasOwnProperty(area)) {

                    areas[area].map((item) => {
                        if (validAreas[area].indexOf(item) === -1) {
                            _loadDefaultSettings(mediaQuery);
                            return false;
                        }
                    });
                }
            }
        };

    return (() => {
        // Go trough each media query
        for (let mediaQuery in validStates) {

            if (validStates.hasOwnProperty(mediaQuery) && wantedState.hasOwnProperty(mediaQuery)) {
                newState[mediaQuery] = newState[mediaQuery] ? newState[mediaQuery] : {};

                areas = {...wantedState[mediaQuery]};
                validAreas = {...validStates[mediaQuery]};
                newState[mediaQuery] = areas;

                _parseEachHeaderArea(mediaQuery);
            }
            else { // return default settings for the current media query
                _loadDefaultSettings(mediaQuery);
            }
        }

        return {...defaultState.HeaderConfig, ...newState};
    })();
};

export const removeItem = (settings) => {
    const {items, item, positionLists, position, mediaQuery} = settings;
    let newState = {};
    let newItems = [];

    for (let i = 0, max = positionLists.length; i < max; i++) {
        newItems.push(positionLists[i].dataset.id);
    }

    newState[mediaQuery] = {};
    newState[mediaQuery][position] = _.pull(newItems, item);
    newState[mediaQuery].Hidden = [...items.Hidden, item];

    return newState;
};
