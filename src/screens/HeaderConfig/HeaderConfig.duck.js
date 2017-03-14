import {List} from 'immutable';

import {getInitialState, validateState} from 'shared/utils/header';
import {defaultState} from 'shared/constants/headerSettings';

const HEADER_CONFIG_UPDATE = 'HEADER_CONFIG_UPDATE';
const HEADER_CONFIG_ITEM_REMOVE = 'HEADER_CONFIG::ITEM_REMOVE';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case HEADER_CONFIG_UPDATE: {
            const {to, children, shouldComponentUpdate, mediaQuery} = action;

            return state
                .set('shouldComponentUpdate', shouldComponentUpdate)
                .setIn(['data', mediaQuery, to], List(children));
        }

        case HEADER_CONFIG_ITEM_REMOVE: {
            const {item, from, mediaQuery} = action;

            return state
                .updateIn(['data', mediaQuery, 'Hidden'], arr => arr.push(item))
                .updateIn(['data', mediaQuery, from], arr => arr.filter(arrayItem => arrayItem !== item))
                .set('shouldComponentUpdate', true);
        }

        default: {
            try {
                validateState(state.get('data'));
                return state;
            }
            catch (e) {
                console.warn(e); // eslint-disable-line
                return defaultState;
            }
        }
    }
};

// Action Creators
export const save = (payload) => ({
    type: HEADER_CONFIG_UPDATE, ...payload,
});

export const remove = (payload) => ({
    type: HEADER_CONFIG_ITEM_REMOVE, ...payload,
});
