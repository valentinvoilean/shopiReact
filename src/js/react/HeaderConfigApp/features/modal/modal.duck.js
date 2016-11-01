import * as UTILS from './modal.util';

// Actions
const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

// Reducer
export default (state = UTILS.getInitialState(), action = {}) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
        case REMOVE_HEADER_ITEM:
            return UTILS.saveHeaderSettings(state, action.payload);

        default:
            return UTILS.validateState(state);
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
        payload: UTILS.removeItem(headerSettings)
    };
};
