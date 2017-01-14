import {fromJS} from 'immutable';

export const defaultState = fromJS({
    sidebar: {
        active: false,
        position: 'left',
        enableModal: true,
        effect: 'none'
    }
});

const MAIN_MENU_TOGGLE = 'MAIN_MENU_TOGGLE';

// Reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case MAIN_MENU_TOGGLE: {
            return state.setIn(['sidebar', 'active'], !state.getIn(['sidebar', 'active']));
        }

        default: {
            return state;
        }
    }
};

// Action Creators
export const toggleMenu = () => ({
    type: MAIN_MENU_TOGGLE
});
