import { includes } from 'lodash';

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
            console.log(action.payload);
            return state;
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
    console.log(dragItem, hoverItem);

    return {
        type: MOVE_ITEM,
        payload: {dragItem, hoverItem, mediaQuery}
    };
};
