import {LOAD_HEADER_SETTINGS, SAVE_HEADER_SETTINGS} from 'constants/actionTypes';
import {updateHeaderComponentPosition, getInitialState, validateState, defaultState} from 'utils';

const headerConfig = (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
            return updateHeaderComponentPosition(state, action.headerConfig);

        case LOAD_HEADER_SETTINGS:
            return state === defaultState ? state : validateState(state);

        default:
            return state === defaultState ? state : validateState(state);
    }
};

export default headerConfig;
