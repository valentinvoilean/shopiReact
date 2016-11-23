import { includes, forOwn } from 'lodash';
import update from 'react-addons-update';

import { mediaQueries } from 'HeaderConfigApp/constants/mediaQueries';
import { getInitialState, validateState, removeItem } from 'HeaderConfigApp/utils/modalUtil';

const SAVE_HEADER_SETTINGS = 'HeaderConfigApp/modal/SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'HeaderConfigApp/modal/REMOVE_HEADER_ITEM';
const MOVE_ITEM = 'HeaderConfigApp/modal/MOVE_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
        case REMOVE_HEADER_ITEM: {
            const mediaQuery = Object.keys(action.payload)[0];
            const newPositions = action.payload[mediaQuery];

            if (includes(mediaQueries, mediaQuery) && newPositions) {
                return {...state, ...{[mediaQuery]: {...state[mediaQuery], ...newPositions}}};
            }
            else {
                console.warn('Component\'s name or its properties are not defined.');
                return validateState(state);
            }
        }

        case MOVE_ITEM: {
            const {dragItem, hoverItem, mediaQuery} = action.payload;
            const cells = state[mediaQuery];
            let sourceCellName;
            let sourceCell;
            let targetCellName;
            let targetCell;

            forOwn(cells, (value, key) => {
                if (value.includes(dragItem)) {
                    sourceCell = value;
                    sourceCellName = key;
                }
            });

            forOwn(cells, (value, key) => {
                if (value.includes(hoverItem)) {
                    targetCell = value;
                    targetCellName = key;
                }
            });

            const sourceNoteIndex = sourceCell.indexOf(dragItem);
            const targetNoteIndex = targetCell.indexOf(hoverItem);

            if (sourceCell === targetCell) {
                sourceCell = update(sourceCell, {
                    $splice: [
                        [sourceNoteIndex, 1],
                        [targetNoteIndex, 0, dragItem]
                    ]
                });
            }
            else {
                // get rid of the source
                sourceCell.splice(sourceNoteIndex, 1);

                // and move it to target
                targetCell.splice(targetNoteIndex, 0, dragItem);
            }

            const newPositions = {
                [sourceCellName]: [...sourceCell],
                [targetCellName]: [...targetCell]
            };

            return {...state, ...{[mediaQuery]: {...state[mediaQuery], ...newPositions}}};
        }

        default: {
            return validateState(state);
        }
    }
};

// Action Creators
export const save = headerSettings => ({
    type: SAVE_HEADER_SETTINGS,
    payload: headerSettings
});

export const remove = (headerSettings) => {
    return {
        type: REMOVE_HEADER_ITEM,
        payload: removeItem(headerSettings)
    };
};

export const move = ({dragItem, hoverItem, mediaQuery}) => {

    return {
        type: MOVE_ITEM,
        payload: {dragItem, hoverItem, mediaQuery}
    };
};
