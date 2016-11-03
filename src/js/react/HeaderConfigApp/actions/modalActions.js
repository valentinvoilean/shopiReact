import {SAVE_HEADER_SETTINGS, REMOVE_HEADER_ITEM} from 'HeaderConfigApp/constants/actionTypes';
import {removeItem} from 'HeaderConfigApp/utils/modalUtil';

// Action Creators
export const save = headerSettings => ({
    type: SAVE_HEADER_SETTINGS,
    payload: headerSettings
});

export const remove = (headerSettings) => {
    return {
        type: REMOVE_HEADER_ITEM,
        payload: removeItem(headerSettings)
    };
};
