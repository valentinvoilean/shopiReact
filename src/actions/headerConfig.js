export const LOAD_HEADER_SETTINGS = 'LOAD_HEADER_SETTINGS';
export const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';

export const loadHeaderSettings = (data) => {
    return {
        type: LOAD_HEADER_SETTINGS,
        data
    }
};

export const saveHeaderSettings = (data) => {
    return {
        type: SAVE_HEADER_SETTINGS,
        data
    }
};
