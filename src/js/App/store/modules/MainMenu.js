import {fromJS} from 'immutable';

export const defaultState = fromJS({
    sidebar: {
        active: false,
        effect: 'Overlay', // Slider, ElasticSlider, BubbleSlider, PushSlider, RevealSlider, Overlay
        position: 'left',
        overlayColor: '#fff'
    }
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
    type: MAIN_MENU_TOGGLE
});

export const deactivateMenu = () => ({
    type: MAIN_MENU_DEACTIVATE
});
