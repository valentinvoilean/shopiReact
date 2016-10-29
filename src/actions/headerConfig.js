import {LOAD_HEADER_SETTINGS, SAVE_HEADER_SETTINGS} from 'constants/actionTypes';

export const loadHeaderSettings = data => ({
    type: LOAD_HEADER_SETTINGS,
    payload: data
});

export const saveHeaderSettings = data => ({
    type: SAVE_HEADER_SETTINGS,
    payload: data
});
