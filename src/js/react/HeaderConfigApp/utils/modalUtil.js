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
        cells,
        validAreas,

        _loadDefaultSettings = (mediaQuery) => {
            console.warn(`Conditions not met; default settings will be loaded.`);
            newState[mediaQuery] = {...defaultState.HeaderConfig.data[mediaQuery]};
        },

        _validateCellNames = (mediaQuery) => {
            const validCellNames = Object.keys(validAreas);
            const availableCellNames = Object.keys(cells);

            for (let i = 0, len = availableCellNames.length; i < len; i++) {
                if (validCellNames.indexOf(availableCellNames[i]) === -1) {
                    console.warn(`The cell ${availableCellNames[i]} doesn't exist!`);
                    _loadDefaultSettings(mediaQuery);
                    return false;
                }
            }

            return true;
        },

        _validateItemNames = (cell, cellName, validItemNames, mediaQuery) => {
            cell.map(item => {
                if (!includes(validItemNames, item)) {
                    console.warn(`The item ${item} is not allowed in ${cellName} !`);
                    _loadDefaultSettings(mediaQuery);
                    return false;
                }
            });

            return true;
        },

        _validateComplexItems = (cell, cellName, validItems, mediaQuery) => {
            const validItemNames = validItems.map((item) => item.name);

            if (_validateItemNames(cell, cellName, validItemNames, mediaQuery)) {
                console.log('validate the rest conditions');
            }
            else {
                return false;
            }

            return true;
        },

        _validateCellConditions = (cell, cellName, cellConditions) => {
            if (typeof cellConditions.max !== 'undefined') {
                if (cell.length > cellConditions.max) {
                    console.log(`Max ${cellConditions.max} items allowed in ${cellName} !`);
                    return false;
                }
            }

            return true;
        },

        _parseEachHeaderArea = (mediaQuery) => {
            // first check if the cell names are valid
            if (!_validateCellNames(mediaQuery)) {
                return;
            }

            // then check if the items are just simple strings, or are complex objects which contain conditions
            forOwn(cells, (cell, cellName) => {
                const complexCell = !(validAreas[cellName] instanceof Array);
                const validItems = complexCell ? validAreas[cellName].items : validAreas[cellName];
                const complexItems = typeof validItems[0] !== 'string';

                // check for cell conditions
                if (complexCell) {
                   if (!_validateCellConditions(cell, cellName, validAreas[cellName])) {
                       return false;
                   }
                }

                if (complexItems) {
                    if (!_validateComplexItems(cell, cellName, validItems, mediaQuery)) {
                        return false;
                    }
                }
                else {
                    if (!_validateItemNames(cell, cellName, validItems, mediaQuery)) {
                        return false;
                    }

                }
            });
        };

    return (() => {
        // Go trough each media query
        forOwn(validStates, (value, mediaQuery) => {
            if (!has(wantedState, mediaQuery)) {
                return _loadDefaultSettings(mediaQuery);
            }

            cells = {...wantedState[mediaQuery]};
            validAreas = {...value};
            newState[mediaQuery] = cells;

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
