import * as UTILS from './modal.util';
import _ from 'lodash';

// Actions
const LOAD_HEADER_SETTINGS = 'LOAD_HEADER_SETTINGS';
const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';
const REMOVE_ITEM = 'REMOVE_ITEM';

// Reducer
export default (state = UTILS.getInitialState(), action = {}) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS:
        case REMOVE_ITEM:
            return UTILS.saveHeaderSettings(state, action.payload);

        case LOAD_HEADER_SETTINGS:
            return UTILS.validateState(state);

        default:
            return UTILS.validateState(state);
    }
};

// Action Creators
export const loadHeaderSettings = headerSettings => ({
    type: LOAD_HEADER_SETTINGS,
    payload: headerSettings
});

export const saveHeaderSettings = headerSettings => ({
    type: SAVE_HEADER_SETTINGS,
    payload: headerSettings
});

export const removeItem = ({items, item, positionLists, position, mediaQuery}) => {
    let newState = {};
    let newItems = [];

    for (let i = 0, max = positionLists.length; i < max; i++) {
        newItems.push(positionLists[i].dataset.id);
    }

    newState[mediaQuery] = {};
    newState[mediaQuery][position] = _.pull(newItems, item);
    newState[mediaQuery].Hidden = [...items.Hidden, item];

    return {
        type: REMOVE_ITEM,
        payload: newState
    };
};
