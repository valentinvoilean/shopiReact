import {getInitialState, validateState, updateState} from 'HeaderConfigApp/utils/modalUtil';

const SAVE_HEADER_SETTINGS = 'HeaderConfigApp/modal/SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'HeaderConfigApp/modal/REMOVE_HEADER_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
        case REMOVE_HEADER_ITEM:
            return updateState(state, action);

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
