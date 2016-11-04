import { includes } from 'lodash';

import { mediaQueries } from 'HeaderConfigApp/constants/mediaQueries';
import { SAVE_HEADER_SETTINGS, REMOVE_HEADER_ITEM } from 'HeaderConfigApp/constants/actionTypes';
import { getInitialState, validateState } from 'HeaderConfigApp/utils/modalUtil';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
        case REMOVE_HEADER_ITEM:
            const mediaQuery = Object.keys(action.payload)[0];
            const newPositions = action.payload[mediaQuery];

            if (includes(mediaQueries, mediaQuery) && newPositions) {
                return {...state, ...{[mediaQuery]: {...state[mediaQuery], ...newPositions}}};
            }
            else {
                console.warn('Component\'s name or its properties are not defined.');
                return validateState(state);
            }

            break;

        default:
            return validateState(state);
    }
};
