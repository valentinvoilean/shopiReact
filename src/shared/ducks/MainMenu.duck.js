import {fromJS} from 'immutable';

// MenuSlider-slide, MenuSlider-push, MenuSlider-reveal, MenuSlider-fallDown,
// MenuOverlay-fade, MenuOverlay-scale, MenuOverlay-slideDown, MenuOverlay-genie, MenuOverlay-corner
export const defaultState = fromJS({
    sidebar: {
        active: false,
        isLight: false,
        effect: 'MenuSlider-push',
        position: 'Left',
    },
});

const MAIN_MENU_TOGGLE = 'MAIN_MENU_TOGGLE';
const MAIN_MENU_DEACTIVATE = 'MAIN_MENU_DEACTIVATE';

// Reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case MAIN_MENU_TOGGLE: {
            return state.setIn(['sidebar', 'active'], !state.getIn(['sidebar', 'active']));
        }

        case MAIN_MENU_DEACTIVATE: {
            return state.setIn(['sidebar', 'active'], false);
        }

        default: {
            return state;
        }
    }
};

// Action Creators
export const toggleMenu = () => ({
    type: MAIN_MENU_TOGGLE,
});

export const deactivateMenu = () => ({
    type: MAIN_MENU_DEACTIVATE,
});
