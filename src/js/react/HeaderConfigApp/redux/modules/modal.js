import {getInitialState, validateState} from 'HeaderConfigApp/utils/modalUtil';
import {pull, includes} from 'lodash';

import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';

const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS: {
            const {to, children, mediaQuery} = action;

            if (includes(mediaQueries, mediaQuery)) {
                return {
                    ...state,
                    [mediaQuery]: {
                        ...state[mediaQuery],
                        [to]: children
                    }
                };
            }
            else {
                console.warn('Component\'s name or its properties are not defined.');
                return validateState(state);
            }
        }

        case REMOVE_HEADER_ITEM: {
            const {item, from, mediaQuery} = action;

            return {
                ...state,
                [mediaQuery]: {
                    ...state[mediaQuery],
                    [from]: pull([...state[mediaQuery][from]], item),
                    Hidden: [...state[mediaQuery].Hidden, item]
                }
            };
        }

        default:
            return validateState(state);

    }
};

// Action Creators
export const save = (payload) => ({
    type: SAVE_HEADER_SETTINGS, ...payload
});

export const remove = (payload) => ({
    type: REMOVE_HEADER_ITEM, ...payload
});
