import * as UTILS from 'react-header-configurator/utils';

// Actions
const LOAD_HEADER_SETTINGS = 'LOAD_HEADER_SETTINGS';
const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';

// Reducer
export default (state = UTILS.getInitialState(), action = {}) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
            return UTILS.updateHeaderComponentPosition(state, action.payload);

        case LOAD_HEADER_SETTINGS:
            return UTILS.validateState(state);

        default:
            return UTILS.validateState(state);
    }
};

// Action Creators
export const LoadAction = headerSettings => ({
    type: LOAD_HEADER_SETTINGS,
    payload: headerSettings
});

export const SaveAction = headerSettings => ({
    type: SAVE_HEADER_SETTINGS,
    payload: headerSettings
});
