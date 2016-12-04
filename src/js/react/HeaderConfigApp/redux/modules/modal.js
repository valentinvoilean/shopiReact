import {getInitialState, validateState} from 'HeaderConfigApp/utils';
import {pull, includes} from 'lodash';

import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';
import {defaultState} from 'HeaderConfigApp/constants/states';

const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS: {
            const {to, children, shouldComponentUpdate, mediaQuery} = action;

            if (includes(mediaQueries, mediaQuery)) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [mediaQuery]: {
                            ...state.data[mediaQuery],
                            [to]: children
                        }
                    },
                    shouldComponentUpdate
                };
            }
            else {
                console.warn('Component\'s name or its properties are not defined.');
                return validateState(state) ? {...defaultState.HeaderConfig, ...state } : defaultState.HeaderConfig;
            }
        }

        case REMOVE_HEADER_ITEM: {
            const {item, from, mediaQuery} = action;

            return {
                ...state,
                data: {
                    ...state.data,
                    [mediaQuery]: {
                        ...state.data[mediaQuery],
                        [from]: pull([...state.data[mediaQuery][from]], item),
                        Hidden: [...state.data[mediaQuery].Hidden, item]
                    }
                },
                shouldComponentUpdate: true
            };
        }

        default:
            return validateState(state) ? {...defaultState.HeaderConfig, ...state } : defaultState.HeaderConfig;

    }
};

// Action Creators
export const save = (payload) => ({
    type: SAVE_HEADER_SETTINGS, ...payload
});

export const remove = (payload) => ({
    type: REMOVE_HEADER_ITEM, ...payload
});
