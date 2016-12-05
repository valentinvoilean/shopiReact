import {includes, has} from 'lodash';
import {validStates} from 'HeaderConfigApp/constants/states';

let cells,
    validAreas,

    _validateCellNames = () => {
        const validCellNames = Object.keys(validAreas);
        const availableCellNames = Object.keys(cells);

        for (let i = 0, len = availableCellNames.length; i < len; i++) {
            if (validCellNames.indexOf(availableCellNames[i]) === -1) {
                throw `The cell ${availableCellNames[i]} doesn't exist!`;
            }
        }
    },

    _validateItemNames = (cell, cellName, validItemNames) => {
        for (let i = 0, len = cell.length; i < len; i++) {
            if (!includes(validItemNames, cell[i])) {
                throw `The item ${cell[i]} is not allowed in ${cellName} !`;
            }
        }
    },

    _validateItemOrder = (cell, validItems) => {
        for (let i = 0, len = cell.length; i < len; i++) {
            const item = cell[i];
            const currentValidItem = validItems.filter((obj) => obj.name === item)[0];

            if (typeof currentValidItem.order !== 'undefined' && currentValidItem.order !== i) {
                throw `The order of the items is not valid !`;
            }
        }
    },

    _validateItemRequirements = (cell, cellName, validItems) => {
        for (let i = 0, len = cell.length; i < len; i++) {
            const item = cell[i];
            const currentValidItem = validItems.filter((obj) => obj.name === item)[0];

            if (typeof currentValidItem.required !== 'undefined') {
                const requiredName = currentValidItem.required.name;

                if (!includes(cell, requiredName)) {
                    throw `The item ${requiredName} is required inside the ${cellName} cell !`;
                }
            }
        }
    },

    _validateComplexItems = (cell, cellName, validItems) => {
        const validItemNames = validItems.map((item) => item.name);

        _validateItemNames(cell, cellName, validItemNames);
        _validateItemOrder(cell, validItems);
        _validateItemRequirements(cell, cellName, validItems);
    },

    _validateCellConditions = (cell, cellName, cellConditions) => {
        if (typeof cellConditions.max !== 'undefined') {
            if (cell.length > cellConditions.max) {
                throw `Max ${cellConditions.max} items allowed in ${cellName} !`;
            }
        }
    },

    _parseEachHeaderArea = (mediaQuery) => {
        // first check if the cell names are valid
        _validateCellNames(mediaQuery);

        // then check if the items are just simple strings, or are complex objects which contain conditions
        for (let cellName in cells) {
            const cell = cells[cellName];
            const complexCell = !(validAreas[cellName] instanceof Array);
            const validItems = complexCell ? validAreas[cellName].items : validAreas[cellName];
            const complexItems = typeof validItems[0] !== 'string';

            // check for cell conditions
            if (complexCell) {
                _validateCellConditions(cell, cellName, validAreas[cellName]);
            }

            if (complexItems) {
                _validateComplexItems(cell, cellName, validItems);
            }
            else {
                _validateItemNames(cell, cellName, validItems);
            }
        }
    };

/**
 * Validate State
 * @param state
 * @returns boolean
 */
export const validateState = state => {
    // Go trough each media query
    for (let mediaQuery in validStates) {
        if (!has(state.data, mediaQuery)) {
            throw `The media query ${mediaQuery} doesn't exist !`;
        }

        cells = {...state.data[mediaQuery]};
        validAreas = {...validStates[mediaQuery]};

        _parseEachHeaderArea(mediaQuery);
    }
};
