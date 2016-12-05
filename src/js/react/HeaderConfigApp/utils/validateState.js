import {includes} from 'lodash';
import {validStates} from 'HeaderConfigApp/constants/states';

let cells,
    validAreas,

    _validateCellNames = () => {
        const validCellNames = Object.keys(validAreas);
        const availableCellNames = Object.keys(cells);

        for (let i = 0, len = availableCellNames.length; i < len; i++) {
            if (validCellNames.indexOf(availableCellNames[i]) === -1) {
                throw `The cell ${availableCellNames[i]} doesn't exist.`;
            }
        }
    },

    _validateItemNames = (cell, cellName, validItemNames) => {
        for (let i = 0, len = cell.length; i < len; i++) {
            if (!includes(validItemNames, cell[i])) {
                const single = validItemNames.length === 1;
                throw `Only ${single ? 'the' : ''} ${validItemNames.join(', ')} ${single ? 'is' : 'are'} allowed in ${cellName}.`;
            }
        }
    },

    _validateItemRequirements = (cell, validItems) => {
        for (let i = 0, len = cell.length; i < len; i++) {
            const item = cell[i];
            const currentValidItem = validItems.filter((obj) => obj.name === item)[0];

            if (typeof currentValidItem.required !== 'undefined') {
                const requiredName = currentValidItem.required.name;
                const requiredPositions = currentValidItem.required.position;
                const throwErrorMessage = () => {
                    throw `The item ${requiredName} is required inside the ${requiredPositions instanceof Array ?
                        requiredPositions.join(' or ') : requiredPositions} cell.`;
                };

                if (requiredPositions instanceof Array) {
                    let included = false;

                    for (let j = 0, rpLen = requiredPositions.length; j < rpLen; j++) {
                        if (includes(cells[requiredPositions[j]], requiredName)) {
                            included = true;
                            break;
                        }
                    }

                    if (!included) {
                        throwErrorMessage();
                    }
                } else if (!includes(cells[requiredPositions], requiredName)) {
                    throwErrorMessage();
                }
            }
        }
    },

    _validateComplexItems = (cell, cellName, validItems) => {
        const validItemNames = validItems.map((item) => item.name);

        _validateItemNames(cell, cellName, validItemNames);
        _validateItemRequirements(cell, validItems);
    },

    _validateCellConditions = (cell, cellName, cellConditions) => {
        if (typeof cellConditions.max !== 'undefined') {
            if (cell.length > cellConditions.max) {
                throw `Max items allowed in ${cellName} is ${cellConditions.max}.`;
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

    validStates.keySeq().forEach(mediaQuery => {
        if (!state.get('data').has(mediaQuery)) {
            throw `The media query ${mediaQuery} doesn't exist.`;
        }

        cells = state.getIn(['data', mediaQuery]).toJS();
        validAreas = validStates.get(mediaQuery);

        _parseEachHeaderArea(mediaQuery);
    });
};
