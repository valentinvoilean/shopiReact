import {LOAD_HEADER_SETTINGS, SAVE_HEADER_SETTINGS} from 'react-header-configurator/constants/actionTypes';
import * as UTILS from 'react-header-configurator/utils';

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
