import {defaultState, validStates} from 'HeaderConfigApp/constants/states';
import _ from 'lodash';

/**
 * Get initial state from Shopify
 * @returns {*}
 */
export const getInitialState = () => {
    const shopifySettings = '{"mobile":{"Flyout":[],"Hidden":[],"MainLeft":["Menu"],"MainCenter":["Logo"],"MainRight":["MyAccount","Wishlist"],"BottomLeft":[],"BottomCenter":[],"BottomRight":[]},"tablet":{"Hidden":[],"TopLeft":[],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":[],"BottomLeft":[],"BottomCenter":[],"BottomRight":[]},"desktop":{"Hidden":[],"TopLeft":[],"TopCenter":[],"TopRight":["MyAccount","Wishlist"],"MainLeft":["Logo"],"MainCenter":["Menu"],"MainRight":[],"BottomLeft":[],"BottomCenter":[],"BottomRight":[]}}';
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

/**
 * Update Header Settings
 * @param initialState
 * @param newData
 * @returns {*}
 */
export const saveHeaderSettings = (initialState, newData) => {
    const validMediaQueries = ['mobile', 'tablet', 'desktop'];
    const mediaQuery = Object.keys(newData)[0];
    const newPositions = newData[mediaQuery];

    if (validMediaQueries.indexOf(mediaQuery) !== -1 && newPositions) {
        let newSettings = {};

        newSettings[mediaQuery] = {
            ...initialState[mediaQuery],
            ...newPositions
        };

        return {...initialState, ...newSettings};
    }

    else {
        console.warn('Component\'s name or its properties are not defined.');
        return initialState;
    }
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
