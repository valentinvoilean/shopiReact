import {fromJS} from 'immutable';

export const defaultState = fromJS({
    menuIcon: {
        active: false
    }
});

const MAIN_MENU_TOGGLE = 'MAIN_MENU_TOGGLE';

// Reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case MAIN_MENU_TOGGLE: {
            return state.setIn(['menuIcon', 'active'], !state.getIn(['menuIcon', 'active']));
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
