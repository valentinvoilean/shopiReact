import {LOAD_HEADER_SETTINGS, SAVE_HEADER_SETTINGS} from 'constants/actionTypes';
import initialState from './initialState';

const headerConfig = (state = initialState.HeaderConfig, action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
            return Object.assign({}, state, action.headerConfig);

        case LOAD_HEADER_SETTINGS:
            return state;

        default:
            return state;
    }
};

export default headerConfig;
