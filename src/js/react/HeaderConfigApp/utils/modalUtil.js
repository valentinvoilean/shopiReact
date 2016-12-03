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

            for (let i = 0, len = cell.length; i < len; i++) {
                if (!includes(validItemNames, cell[i])) {
                    console.warn(`The item ${cell[i]} is not allowed in ${cellName} !`);
                    _loadDefaultSettings(mediaQuery);
                    return false;
                }
            }

            return true;
        },

        _validateItemOrder = (cell, validItems, mediaQuery) => {
            for (let i = 0, len = cell.length; i < len; i++) {
                const item = cell[i];
                const currentValidItem = validItems.filter((obj) => obj.name === item)[0];

                if (typeof currentValidItem.order !== 'undefined' && currentValidItem.order !== i) {
                    console.warn(`The order of the items is not valid !`);
                    _loadDefaultSettings(mediaQuery);
                    return false;
                }
            }

            return true;
        },

        _validateItemRequirements = (cell, cellName, validItems, mediaQuery) => {
            for (let i = 0, len = cell.length; i < len; i++) {
                const item = cell[i];
                const currentValidItem = validItems.filter((obj) => obj.name === item)[0];

                if (typeof currentValidItem.required !== 'undefined') {
                    const requiredName = currentValidItem.required.name;

                    if (!includes(cell, requiredName)) {
                        console.warn(`The item ${requiredName} is required inside the ${cellName} cell !`);
                        _loadDefaultSettings(mediaQuery);
                        return false;
                    }
                }
            }

            return true;
        },

        _validateComplexItems = (cell, cellName, validItems, mediaQuery) => {
            const validItemNames = validItems.map((item) => item.name);

            if (_validateItemNames(cell, cellName, validItemNames, mediaQuery)) {
                return _validateItemOrder(cell, validItems, mediaQuery) &&
                _validateItemRequirements(cell, cellName, validItems, mediaQuery);
            }
            else {
                return false;
            }
        },

        _validateCellConditions = (cell, cellName, cellConditions, mediaQuery) => {
            if (typeof cellConditions.max !== 'undefined') {
                if (cell.length > cellConditions.max) {
                    console.warn(`Max ${cellConditions.max} items allowed in ${cellName} !`);
                    _loadDefaultSettings(mediaQuery);
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
                   if (!_validateCellConditions(cell, cellName, validAreas[cellName], mediaQuery)) {
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
