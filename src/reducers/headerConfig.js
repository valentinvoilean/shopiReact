import {LOAD_HEADER_SETTINGS, SAVE_HEADER_SETTINGS} from 'constants/actionTypes';
import {updateHeaderComponentPosition, getInitialState, validateState} from 'utils';

const HeaderConfigReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
            return updateHeaderComponentPosition(state, action.payload);

        case LOAD_HEADER_SETTINGS:
            return validateState(state);

        default:
            return validateState(state);
    }
};

export default HeaderConfigReducer;
