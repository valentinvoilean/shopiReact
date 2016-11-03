import { mediaQueries } from 'HeaderConfigApp/constants/mediaQueries';
import { SAVE_HEADER_SETTINGS, REMOVE_HEADER_ITEM } from 'HeaderConfigApp/constants/actionTypes';

import { getInitialState, validateState } from 'HeaderConfigApp/utils/modalUtil';

// Reducer
export default (state = getInitialState(), action = {}) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
        case REMOVE_HEADER_ITEM:
            const mediaQuery = Object.keys(action.payload)[0];
            const newPositions = action.payload[mediaQuery];

            if (mediaQueries.indexOf(mediaQuery) !== -1 && newPositions) {
                let newSettings = {};

                newSettings[mediaQuery] = {
                    ...state[mediaQuery],
                    ...newPositions
                };

                return {...state, ...newSettings};
            }
            else {
                console.warn('Component\'s name or its properties are not defined.');
                return state;
            }

        default:
            return validateState(state);
    }
};
