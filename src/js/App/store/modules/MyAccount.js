import {fromJS} from 'immutable';

export const defaultState = fromJS({
    MyAccount: {
        activeLink: 'Register'
    }
});

const MY_ACCOUNT_ACTIVATE_LINK = 'MY_ACCOUNT_ACTIVATE_LINK';

// Reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case MY_ACCOUNT_ACTIVATE_LINK: {
            const {activeLink} = action;

            return state.set('activeLink', activeLink);
        }

        default: {
            return state.get('MyAccount');
        }
    }
};

// Action Creators
export const activateLink = (payload) => ({
    type: MY_ACCOUNT_ACTIVATE_LINK, ...payload
});
