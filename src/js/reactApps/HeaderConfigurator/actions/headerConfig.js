import {LOAD_HEADER_SETTINGS, SAVE_HEADER_SETTINGS} from 'react-header-configurator/constants/actionTypes';

export const loadHeaderSettings = headerSettings => ({
    type: LOAD_HEADER_SETTINGS,
    payload: headerSettings
});

export const saveHeaderSettings = headerSettings => ({
    type: SAVE_HEADER_SETTINGS,
    payload: headerSettings
});
