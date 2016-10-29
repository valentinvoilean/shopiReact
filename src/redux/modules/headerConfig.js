import * as UTILS from 'utils';

// Actions
const LOAD = 'headerConfig/LOAD';
const SAVE = 'headerConfig/SAVE';

// Reducer
export default (state = UTILS.getInitialState(), action = {}) => {
    switch (action.type) {
        case SAVE:
            return UTILS.updateHeaderComponentPosition(state, action.payload);

        case LOAD:
            return UTILS.validateState(state);

        default:
            return UTILS.validateState(state);
    }
};

// Action Creators
export const loadHeaderSettings = headerSettings => ({
    type: LOAD,
    payload: headerSettings
});

export const saveHeaderSettings = headerSettings => ({
    type: SAVE,
    payload: headerSettings
});
