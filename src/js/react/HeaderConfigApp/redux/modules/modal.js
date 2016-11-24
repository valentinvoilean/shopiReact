import {includes, pull} from 'lodash';
import update from 'react-addons-update';

import {mediaQueries} from 'HeaderConfigApp/constants/mediaQueries';
import {getInitialState, validateState} from 'HeaderConfigApp/utils/modalUtil';

const SAVE_HEADER_SETTINGS = 'HeaderConfigApp/modal/SAVE_HEADER_SETTINGS';
const REMOVE_HEADER_ITEM = 'HeaderConfigApp/modal/REMOVE_HEADER_ITEM';

// Reducer
export default (state = getInitialState(), action) => {
    switch (action.type) {
        case SAVE_HEADER_SETTINGS: {
            const {mediaQuery, to, from} = action;

            if (includes(mediaQueries, mediaQuery)) {
                return update(state, {
                    [mediaQuery]: {$merge: {
                        [to.dataset.id]: [...to.children].map(item => item.dataset.id),
                        [from.dataset.id]: [...from.children].map(item => item.dataset.id)
                    }}
                });
            }
            else {
                console.warn('Component\'s name or its properties are not defined.');
                return validateState(state);
            }
        }

        case REMOVE_HEADER_ITEM: {
            const {item, mediaQuery, oldPosition} = action;
            const cells = state[mediaQuery];
            const oldCell = [...cells[oldPosition]];

            return update(state, {
                [mediaQuery]: {
                    $merge: {
                        [oldPosition]: pull(oldCell, item),
                        Hidden: [...cells.Hidden, item]
                    }
                }
            });
        }

        default: {
            return validateState(state);
        }
    }
};

// Action Creators
export const save = ({mediaQuery, to, from}) => ({
    type: SAVE_HEADER_SETTINGS, mediaQuery, to, from
});

export const remove = ({item, mediaQuery, oldPosition}) => ({
    type: REMOVE_HEADER_ITEM, item, mediaQuery, oldPosition
});
