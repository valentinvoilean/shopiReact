import {getInitialState, validateState} from 'HeaderConfigApp/utils';
import {List} from 'immutable';
import {defaultState} from 'HeaderConfigApp/constants/states';

const SAVE_HEADER_SETTINGS = 'SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS: {
            const {to, children, shouldComponentUpdate, mediaQuery} = action;

            return state
                .set('shouldComponentUpdate', shouldComponentUpdate)
                .setIn(['data', mediaQuery, to], List(children));
        }

        case REMOVE_HEADER_ITEM: {
            const {item, from, mediaQuery} = action;

            return state
                .updateIn(['data', mediaQuery, 'Hidden'], arr => arr.push(item))
                .updateIn(['data', mediaQuery, from], arr => arr.filter(arrayItem => arrayItem !== item))
                .set('shouldComponentUpdate', true);
        }

        default: {
            try {
                validateState(state);
                return defaultState.get('HeaderConfig').mergeDeep(state);
            }
            catch (e) {
                console.warn(e);
                return defaultState.get('HeaderConfig');
            }
        }
    }
};

// Action Creators
export const save = (payload) => ({
    type: SAVE_HEADER_SETTINGS, ...payload
});

export const remove = (payload) => ({
    type: REMOVE_HEADER_ITEM, ...payload
});
