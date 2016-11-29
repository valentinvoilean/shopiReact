import {getInitialState, validateState, updateState} from 'HeaderConfigApp/utils/modalUtil';
import {pull} from 'lodash';

const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
            return updateState(state, action);

        case REMOVE_HEADER_ITEM: {
            const {item, from, mediaQuery} = action;

            return {
                ...state,
                data: {
                    ...state.data,
                    [mediaQuery]: {
                        ...state.data[mediaQuery],
                        [from]: pull([...state.data[mediaQuery][from]], item),
                        Hidden: [...state.data[mediaQuery].Hidden, item]
                    }
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
