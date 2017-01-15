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
